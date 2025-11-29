import { useState } from "react";
import {
  Plus,
  Trash2,
  Save,
  Calendar,
  Clock,
  Target,
  Dumbbell,
} from "lucide-react";
import "../Style/style.css";

export const Create_routine = () => {
  const [routineName, setRoutineName] = useState("");
  const [routineDescription, setRoutineDescription] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [showExerciseModal, setShowExerciseModal] = useState(false);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const exerciseLibrary = [
    "Bench Press",
    "Squats",
    "Deadlifts",
    "Pull-ups",
    "Shoulder Press",
    "Bicep Curls",
    "Tricep Dips",
    "Leg Press",
    "Lat Pulldown",
    "Rows",
    "Plank",
    "Lunges",
    "Crunches",
    "Russian Twists",
    "Mountain Climbers",
  ];

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const addExercise = (exerciseName) => {
    const newExercise = {
      id: Date.now().toString(),
      name: exerciseName,
      sets: 3,
      reps: 10,
      rest: 60,
      notes: "",
    };
    setExercises([...exercises, newExercise]);
    setShowExerciseModal(false);
  };

  const removeExercise = (id) => {
    setExercises(exercises.filter((ex) => ex.id !== id));
  };

  const updateExercise = (id, field, value) => {
    setExercises(
      exercises.map((ex) => (ex.id === id ? { ...ex, [field]: value } : ex))
    );
  };

  const handleSave = () => {
    if (!routineName.trim()) {
      alert("Please enter a routine name");
      return;
    }
    if (selectedDays.length === 0) {
      alert("Please select at least one training day");
      return;
    }
    if (exercises.length === 0) {
      alert("Please add at least one exercise");
      return;
    }

    console.log("Saving routine:", {
      routineName,
      routineDescription,
      selectedDays,
      exercises,
    });
    // Aquí iría la lógica para guardar en tu backend
    alert("Routine saved successfully!");
  };

  return (
    <div className="create-routine-container">
      <div className="routine-header">
        <h1>Create Workout Routine</h1>
        <p>Design your personalized training program</p>
      </div>

      <div className="routine-content">
        <div className="routine-info-section">
          <div className="info-card">
            <div className="card-header">
              <Target size={24} />
              <h2>Routine Details</h2>
            </div>
            <div className="form-group">
              <label>Routine Name</label>
              <input
                type="text"
                placeholder="e.g., Upper Body Strength"
                value={routineName}
                onChange={(e) => setRoutineName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Describe your routine goals..."
                value={routineDescription}
                onChange={(e) => setRoutineDescription(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <Calendar size={24} />
              <h2>Training Days</h2>
            </div>
            <div className="days-selector">
              {days.map((day) => (
                <button
                  key={day}
                  className={`day-button ${
                    selectedDays.includes(day) ? "active" : ""
                  }`}
                  onClick={() => toggleDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="exercises-section">
          <div className="section-header">
            <div className="header-left">
              <Dumbbell size={24} />
              <h2>Exercises</h2>
              <span className="exercise-count">{exercises.length}</span>
            </div>
            <button
              className="add-exercise-button"
              onClick={() => setShowExerciseModal(true)}
            >
              <Plus size={20} />
              Add Exercise
            </button>
          </div>

          <div className="exercises-list">
            {exercises.length === 0 ? (
              <div className="empty-state">
                <Dumbbell size={48} />
                <p>No exercises added yet</p>
                <span>Click "Add Exercise" to start building your routine</span>
              </div>
            ) : (
              exercises.map((exercise) => (
                <div key={exercise.id} className="exercise-card">
                  <div className="exercise-header">
                    <h3>{exercise.name}</h3>
                    <button
                      className="delete-button"
                      onClick={() => removeExercise(exercise.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="exercise-details">
                    <div className="detail-group">
                      <label>Sets</label>
                      <input
                        type="number"
                        value={exercise.sets}
                        onChange={(e) =>
                          updateExercise(
                            exercise.id,
                            "sets",
                            parseInt(e.target.value) || 0
                          )
                        }
                        min="1"
                      />
                    </div>
                    <div className="detail-group">
                      <label>Reps</label>
                      <input
                        type="number"
                        value={exercise.reps}
                        onChange={(e) =>
                          updateExercise(
                            exercise.id,
                            "reps",
                            parseInt(e.target.value) || 0
                          )
                        }
                        min="1"
                      />
                    </div>
                    <div className="detail-group">
                      <label>
                        <Clock size={16} /> Rest (sec)
                      </label>
                      <input
                        type="number"
                        value={exercise.rest}
                        onChange={(e) =>
                          updateExercise(
                            exercise.id,
                            "rest",
                            parseInt(e.target.value) || 0
                          )
                        }
                        min="0"
                        step="15"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Notes</label>
                    <input
                      type="text"
                      placeholder="Add exercise notes..."
                      value={exercise.notes}
                      onChange={(e) =>
                        updateExercise(exercise.id, "notes", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="routine-actions">
          <button className="save-routine-button" onClick={handleSave}>
            <Save size={20} />
            Save Routine
          </button>
        </div>
      </div>

      {showExerciseModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowExerciseModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Select Exercise</h2>
              <button onClick={() => setShowExerciseModal(false)}>×</button>
            </div>
            <div className="modal-content">
              <div className="exercise-library">
                {exerciseLibrary.map((exercise) => (
                  <button
                    key={exercise}
                    className="exercise-option"
                    onClick={() => addExercise(exercise)}
                  >
                    <Dumbbell size={20} />
                    <span>{exercise}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
