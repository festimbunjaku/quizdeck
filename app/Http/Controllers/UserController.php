<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\QuizUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }

    public function edit(string $id)
    {
        $user = User::findOrFail($id);
        return view('users.edit', compact('user'));
    }

    public function show(string $id)
    {
        $user = User::findOrFail($id);
        $totalQuizzesTaken = $user->quizzes()->withPivot('score', 'completed')->get();
        $completedQuizzes = $totalQuizzesTaken->filter(fn($quiz) => $quiz->pivot->completed);
        $leaderboard = QuizUser::selectRaw('user_id, sum(score) as total_score')
            ->groupBy('user_id')
            ->orderByDesc('total_score')
            ->get();
        $rank = $leaderboard->search(fn($item) => $item->user_id == $user->id);
        $rank = $rank !== false ? $rank + 1 : 'Unranked';
        return view('users.show', compact('user', 'totalQuizzesTaken', 'completedQuizzes', 'rank'));
    }

    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'current_password' => 'nullable|string',
            'new_password' => 'nullable|string|min:8|confirmed',
        ]);

        $user->name = $request->name;
        $user->email = $request->email;

        if ($request->filled('current_password') && $request->filled('new_password')) {
            if (!Hash::check($request->current_password, $user->password)) {
                return redirect()->back()->withErrors([
                    'current_password' => 'The current password is incorrect.',
                ]);
            }
            $user->password = bcrypt($request->new_password);
        }

        $user->save();

        return redirect()->route('users.index')->with('success', 'User updated successfully.');
    }

    public function destroy(string $id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('users.index')->with('success', 'User deleted successfully.');
    }

    public function getCompletedQuizzes(Request $request)
    {
        $user = $request->user();
        $completedQuizzes = $user->quizzes()->where('pivot.completed', true)->get();
        return response()->json($completedQuizzes);
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $user->name = $request->name;
        $user->save();

        return response()->json(['message' => 'Profile updated successfully!']);
    }

    public function updatePassword(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|string|min:8|confirmed',
        ]);

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['error' => 'Current password is incorrect.'], 400);
        }

        $user->password = bcrypt($request->new_password);
        $user->save();

        return response()->json(['message' => 'Password updated successfully!']);
    }
}
