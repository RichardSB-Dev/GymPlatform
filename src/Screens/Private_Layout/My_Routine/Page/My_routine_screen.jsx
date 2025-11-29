import { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Calendar,
  Clock,
  Dumbbell,
  TrendingUp,
  CheckCircle,
  PlayCircle,
  BarChart3,
} from "lucide-react";
import "../Style/style.css";
import { useNavigate } from "react-router-dom";

export const My_routine_screen = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const navigate = useNavigate();

  const workoutRoutines = [
    {
      id: 1,
      name: "Upper Body Strength",
      day: "Monday",
      duration: "60 min",
      exercises: 8,
      completed: true,
      lastCompleted: "2 days ago",
      exercises_list: [
        { name: "Bench Press", sets: 4, reps: "8-10", weight: "185 lbs" },
        { name: "Bent Over Rows", sets: 4, reps: "8-10", weight: "155 lbs" },
        { name: "Shoulder Press", sets: 3, reps: "10-12", weight: "95 lbs" },
        { name: "Pull-ups", sets: 3, reps: "8-10", weight: "Bodyweight" },
        { name: "Dumbbell Curls", sets: 3, reps: "12-15", weight: "35 lbs" },
        { name: "Tricep Dips", sets: 3, reps: "10-12", weight: "Bodyweight" },
        { name: "Face Pulls", sets: 3, reps: "15-20", weight: "40 lbs" },
        { name: "Plank", sets: 3, reps: "60 sec", weight: "Bodyweight" },
      ],
    },
    {
      id: 2,
      name: "Lower Body Power",
      day: "Wednesday",
      duration: "75 min",
      exercises: 7,
      completed: false,
      lastCompleted: "Never",
      exercises_list: [
        { name: "Back Squats", sets: 4, reps: "6-8", weight: "225 lbs" },
        {
          name: "Romanian Deadlifts",
          sets: 4,
          reps: "8-10",
          weight: "185 lbs",
        },
        { name: "Leg Press", sets: 3, reps: "10-12", weight: "360 lbs" },
        { name: "Walking Lunges", sets: 3, reps: "12/leg", weight: "45 lbs" },
        { name: "Leg Curls", sets: 3, reps: "12-15", weight: "90 lbs" },
        { name: "Calf Raises", sets: 4, reps: "15-20", weight: "135 lbs" },
        { name: "Ab Wheel", sets: 3, reps: "10-12", weight: "Bodyweight" },
      ],
    },
    {
      id: 3,
      name: "Push Day",
      day: "Friday",
      duration: "65 min",
      exercises: 6,
      completed: false,
      lastCompleted: "5 days ago",
      exercises_list: [
        {
          name: "Incline Bench Press",
          sets: 4,
          reps: "8-10",
          weight: "165 lbs",
        },
        { name: "Overhead Press", sets: 4, reps: "8-10", weight: "115 lbs" },
        { name: "Dumbbell Flyes", sets: 3, reps: "12-15", weight: "40 lbs" },
        { name: "Lateral Raises", sets: 3, reps: "12-15", weight: "25 lbs" },
        { name: "Tricep Pushdowns", sets: 3, reps: "12-15", weight: "70 lbs" },
        {
          name: "Overhead Tricep Ext",
          sets: 3,
          reps: "12-15",
          weight: "50 lbs",
        },
      ],
    },
    {
      id: 4,
      name: "Pull Day",
      day: "Saturday",
      duration: "70 min",
      exercises: 7,
      completed: false,
      lastCompleted: "6 days ago",
      exercises_list: [
        { name: "Deadlifts", sets: 4, reps: "5-6", weight: "275 lbs" },
        { name: "Lat Pulldowns", sets: 4, reps: "10-12", weight: "140 lbs" },
        { name: "Cable Rows", sets: 3, reps: "10-12", weight: "120 lbs" },
        { name: "Face Pulls", sets: 3, reps: "15-20", weight: "50 lbs" },
        { name: "Barbell Curls", sets: 3, reps: "10-12", weight: "75 lbs" },
        { name: "Hammer Curls", sets: 3, reps: "12-15", weight: "40 lbs" },
        { name: "Reverse Flyes", sets: 3, reps: "15-20", weight: "25 lbs" },
      ],
    },
  ];

  const stats = [
    { label: "Total Workouts", value: "24", icon: Dumbbell },
    { label: "This Week", value: "3", icon: Calendar },
    { label: "Avg Duration", value: "67 min", icon: Clock },
    { label: "Progress", value: "+15%", icon: TrendingUp },
  ];

  const handleStartWorkout = (workout) => {
    alert(`Starting workout: ${workout.name}`);
  };

  const handleEditWorkout = (workout) => {
    alert(`Editing workout: ${workout.name}`);
  };

  const handleDeleteWorkout = (workout) => {
    if (confirm(`Are you sure you want to delete "${workout.name}"?`)) {
      alert(`Deleted workout: ${workout.name}`);
    }
  };

  const handleViewDetails = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleCloseModal = () => {
    setSelectedWorkout(null);
  };

  const handleOnClick = () => {
    navigate("/app/create-routine");
  };

  return (
    <div className="routine-container">
      <header className="routine-header">
        <div>
          <h1 className="routine-title">My Routine</h1>
          <p className="routine-subtitle">
            Track and manage your workout routines
          </p>
        </div>
        <button onClick={() => handleOnClick()} className="btn-add-routine">
          <Plus size={20} />
          Create New Routine
        </button>
      </header>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon-wrapper">
              <stat.icon className="stat-icon" size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="routine-tabs">
        <button
          className={`tab-btn ${activeTab === "current" ? "active" : ""}`}
          onClick={() => setActiveTab("current")}
        >
          Current Routine
        </button>
        <button
          className={`tab-btn ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          Workout History
        </button>
        <button
          className={`tab-btn ${activeTab === "templates" ? "active" : ""}`}
          onClick={() => setActiveTab("templates")}
        >
          Templates
        </button>
      </div>

      {activeTab === "current" && (
        <div className="workouts-grid">
          {workoutRoutines.map((workout) => (
            <div key={workout.id} className="workout-card">
              <div className="workout-card-header">
                <div className="workout-day-badge">{workout.day}</div>
                {workout.completed && (
                  <div className="completed-badge">
                    <CheckCircle size={16} />
                    Completed
                  </div>
                )}
              </div>

              <div className="workout-card-body">
                <h3 className="workout-name">{workout.name}</h3>

                <div className="workout-info">
                  <div className="info-item">
                    <Clock size={16} />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="info-item">
                    <Dumbbell size={16} />
                    <span>{workout.exercises} exercises</span>
                  </div>
                </div>

                <div className="workout-last-completed">
                  Last completed: {workout.lastCompleted}
                </div>
              </div>

              <div className="workout-card-footer">
                <button
                  className="btn-icon"
                  onClick={() => handleViewDetails(workout)}
                  title="View Details"
                >
                  <BarChart3 size={18} />
                </button>
                <button
                  className="btn-icon"
                  onClick={() => handleEditWorkout(workout)}
                  title="Edit"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  className="btn-icon btn-danger"
                  onClick={() => handleDeleteWorkout(workout)}
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
                <button
                  className="btn-start-workout"
                  onClick={() => handleStartWorkout(workout)}
                >
                  <PlayCircle size={18} />
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "history" && (
        <div className="empty-state">
          <BarChart3 size={64} className="empty-icon" />
          <h3>Workout History</h3>
          <p>Your completed workouts will appear here</p>
        </div>
      )}

      {activeTab === "templates" && (
        <div className="empty-state">
          <Dumbbell size={64} className="empty-icon" />
          <h3>Workout Templates</h3>
          <p>Browse and use pre-made workout templates</p>
          <button className="btn-browse">Browse Templates</button>
        </div>
      )}

      {/* Modal de detalles */}
      {selectedWorkout && (
        <div className="workout-modal-overlay" onClick={handleCloseModal}>
          <div className="workout-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>

            <div className="modal-header">
              <h2>{selectedWorkout.name}</h2>
              <div className="modal-header-info">
                <span className="modal-day">{selectedWorkout.day}</span>
                <span className="modal-duration">
                  {selectedWorkout.duration}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <h3>Exercises ({selectedWorkout.exercises_list.length})</h3>
              <div className="exercises-list">
                {selectedWorkout.exercises_list.map((exercise, index) => (
                  <div key={index} className="exercise-item">
                    <div className="exercise-number">{index + 1}</div>
                    <div className="exercise-details">
                      <p className="exercise-name">{exercise.name}</p>
                      <p className="exercise-specs">
                        {exercise.sets} sets × {exercise.reps} reps
                        {exercise.weight !== "Bodyweight" &&
                          ` • ${exercise.weight}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn-modal-primary"
                onClick={() => handleStartWorkout(selectedWorkout)}
              >
                <PlayCircle size={20} />
                Start This Workout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
