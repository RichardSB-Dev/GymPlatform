import { useState } from "react";
import {
  Plus,
  Coffee,
  Sun,
  Sunset,
  Moon,
  Edit2,
  Trash2,
  Calendar,
  TrendingUp,
  Flame,
  Apple,
} from "lucide-react";
import "../Styles/style.css";

export const Food_schedule_screen = () => {
  console.log("Food Schedule Renderizado !!");

  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const mealPlan = {
    Monday: [
      {
        id: 1,
        type: "Breakfast",
        time: "7:00 AM",
        icon: Coffee,
        color: "#ffa500",
        meals: [
          {
            name: "Oatmeal with berries",
            calories: 350,
            protein: 12,
            carbs: 54,
            fats: 8,
          },
          {
            name: "Greek yogurt",
            calories: 150,
            protein: 15,
            carbs: 12,
            fats: 4,
          },
          {
            name: "Orange juice",
            calories: 110,
            protein: 2,
            carbs: 26,
            fats: 0,
          },
        ],
      },
      {
        id: 2,
        type: "Lunch",
        time: "12:30 PM",
        icon: Sun,
        color: "#00d9ff",
        meals: [
          {
            name: "Grilled chicken breast",
            calories: 284,
            protein: 53,
            carbs: 0,
            fats: 6,
          },
          { name: "Brown rice", calories: 216, protein: 5, carbs: 45, fats: 2 },
          {
            name: "Mixed vegetables",
            calories: 80,
            protein: 3,
            carbs: 15,
            fats: 1,
          },
        ],
      },
      {
        id: 3,
        type: "Snack",
        time: "3:00 PM",
        icon: Apple,
        color: "#4ade80",
        meals: [
          {
            name: "Protein shake",
            calories: 200,
            protein: 25,
            carbs: 15,
            fats: 5,
          },
          {
            name: "Almonds (1 oz)",
            calories: 164,
            protein: 6,
            carbs: 6,
            fats: 14,
          },
        ],
      },
      {
        id: 4,
        type: "Dinner",
        time: "7:00 PM",
        icon: Sunset,
        color: "#a78bfa",
        meals: [
          {
            name: "Salmon fillet",
            calories: 367,
            protein: 39,
            carbs: 0,
            fats: 22,
          },
          {
            name: "Sweet potato",
            calories: 180,
            protein: 4,
            carbs: 41,
            fats: 0,
          },
          { name: "Green salad", calories: 50, protein: 2, carbs: 10, fats: 1 },
        ],
      },
      {
        id: 5,
        type: "Evening",
        time: "9:00 PM",
        icon: Moon,
        color: "#8a8a8a",
        meals: [
          {
            name: "Cottage cheese",
            calories: 120,
            protein: 14,
            carbs: 6,
            fats: 5,
          },
        ],
      },
    ],
  };

  const currentDayMeals = mealPlan[selectedDay] || mealPlan.Monday;

  const dailyTotals = currentDayMeals.reduce(
    (acc, meal) => {
      meal.meals.forEach((item) => {
        acc.calories += item.calories;
        acc.protein += item.protein;
        acc.carbs += item.carbs;
        acc.fats += item.fats;
      });
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  const nutritionGoals = {
    calories: 2500,
    protein: 180,
    carbs: 250,
    fats: 70,
  };

  const calculatePercentage = (current, goal) => {
    return Math.min((current / goal) * 100, 100);
  };

  const handleAddMeal = (mealType) => {
    alert(`Adding meal to ${mealType}`);
  };

  const handleEditMeal = (meal) => {
    alert(`Editing ${meal.name}`);
  };

  const handleDeleteMeal = (meal) => {
    if (confirm(`Delete ${meal.name}?`)) {
      alert(`Deleted ${meal.name}`);
    }
  };

  return (
    <div className="food-schedule-container">
      <header className="food-schedule-header">
        <div>
          <h1 className="food-schedule-title">Food Schedule</h1>
          <p className="food-schedule-subtitle">
            Plan and track your daily nutrition
          </p>
        </div>
        <button className="btn-add-meal">
          <Plus size={20} />
          Add Meal
        </button>
      </header>

      <div className="nutrition-overview">
        <div className="nutrition-card">
          <div className="nutrition-icon-wrapper calories">
            <Flame size={24} />
          </div>
          <div className="nutrition-content">
            <p className="nutrition-label">Calories</p>
            <p className="nutrition-value">
              {dailyTotals.calories} / {nutritionGoals.calories}
            </p>
            <div className="nutrition-bar">
              <div
                className="nutrition-progress calories"
                style={{
                  width: `${calculatePercentage(
                    dailyTotals.calories,
                    nutritionGoals.calories
                  )}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="nutrition-card">
          <div className="nutrition-icon-wrapper protein">
            <TrendingUp size={24} />
          </div>
          <div className="nutrition-content">
            <p className="nutrition-label">Protein</p>
            <p className="nutrition-value">
              {dailyTotals.protein}g / {nutritionGoals.protein}g
            </p>
            <div className="nutrition-bar">
              <div
                className="nutrition-progress protein"
                style={{
                  width: `${calculatePercentage(
                    dailyTotals.protein,
                    nutritionGoals.protein
                  )}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="nutrition-card">
          <div className="nutrition-icon-wrapper carbs">
            <Apple size={24} />
          </div>
          <div className="nutrition-content">
            <p className="nutrition-label">Carbs</p>
            <p className="nutrition-value">
              {dailyTotals.carbs}g / {nutritionGoals.carbs}g
            </p>
            <div className="nutrition-bar">
              <div
                className="nutrition-progress carbs"
                style={{
                  width: `${calculatePercentage(
                    dailyTotals.carbs,
                    nutritionGoals.carbs
                  )}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="nutrition-card">
          <div className="nutrition-icon-wrapper fats">
            <Calendar size={24} />
          </div>
          <div className="nutrition-content">
            <p className="nutrition-label">Fats</p>
            <p className="nutrition-value">
              {dailyTotals.fats}g / {nutritionGoals.fats}g
            </p>
            <div className="nutrition-bar">
              <div
                className="nutrition-progress fats"
                style={{
                  width: `${calculatePercentage(
                    dailyTotals.fats,
                    nutritionGoals.fats
                  )}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="days-selector">
        {days.map((day) => (
          <button
            key={day}
            className={`day-btn ${selectedDay === day ? "active" : ""}`}
            onClick={() => setSelectedDay(day)}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>

      <div className="meals-timeline">
        {currentDayMeals.map((mealSection) => (
          <div key={mealSection.id} className="meal-section">
            <div className="meal-section-header">
              <div className="meal-type-info">
                <div
                  className="meal-icon-wrapper"
                  style={{ background: `${mealSection.color}20` }}
                >
                  <mealSection.icon
                    size={20}
                    style={{ color: mealSection.color }}
                  />
                </div>
                <div>
                  <h3 className="meal-type">{mealSection.type}</h3>
                  <p className="meal-time">{mealSection.time}</p>
                </div>
              </div>
              <button
                className="btn-add-to-meal"
                onClick={() => handleAddMeal(mealSection.type)}
              >
                <Plus size={18} />
              </button>
            </div>

            <div className="meals-list">
              {mealSection.meals.map((meal, index) => (
                <div key={index} className="meal-item">
                  <div className="meal-item-content">
                    <p className="meal-name">{meal.name}</p>
                    <div className="meal-macros">
                      <span className="macro">
                        <strong>{meal.calories}</strong> cal
                      </span>
                      <span className="macro-divider">•</span>
                      <span className="macro">
                        <strong>{meal.protein}g</strong> protein
                      </span>
                      <span className="macro-divider">•</span>
                      <span className="macro">
                        <strong>{meal.carbs}g</strong> carbs
                      </span>
                      <span className="macro-divider">•</span>
                      <span className="macro">
                        <strong>{meal.fats}g</strong> fat
                      </span>
                    </div>
                  </div>
                  <div className="meal-item-actions">
                    <button
                      className="btn-meal-action"
                      onClick={() => handleEditMeal(meal)}
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      className="btn-meal-action btn-danger"
                      onClick={() => handleDeleteMeal(meal)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
