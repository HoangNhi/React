import React, { use, useEffect, useState } from "react";

const lessons = [
  { id: 1, name: "Lesson 1" },
  { id: 2, name: "Lesson 2" },
  { id: 3, name: "Lesson 3" },
];

function Content() {
  const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(`Received comment for lesson ${lessonId}: ${detail}`);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId])

  return (
    <React.Fragment>
      {lessons.map((lesson) => (
        <div key={lesson.id} style={{ color: lesson.id === lessonId ? "red" : "black" }}>
          <h2>{lesson.name}</h2>
          <button onClick={() => setLessonId(lesson.id)}>
            Select Lesson {lesson.id}
          </button>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Content;
