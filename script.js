console.log("308-SBA")
// The provided course information. COURSE INFO OBJ:
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group. ASSIGNMENT GRP OBJ & EACH ASSIGNMENT INFO OBJ within the ASSIGNMENTS ARRAY
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.:
//An array of LearnerSubmission objects :
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// function getLearnerData(course, ag, submissions) {

//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];

//     return result;
//   }

// the learner’s total, weighted average :
function calculateWeightedAverage(scoreData) {
  let totalPoints = 0;
  let totalScore = 0;

  scoreData.forEach(score => {
    totalPoints += score.points_possible;
    totalScore += score.score;
  });

  return totalPoints !== 0 ? totalScore / totalPoints : 0; // Avoid division by zero
}

//assignment - due calculation:
function isAssignmentDue(assignment) {
  const dueDate = new Date(assignment.due_at);
  const currentDate = new Date();
  return currentDate >= dueDate;
}

// checking if the assignment group id and course info id are same

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  try {
    if (AssignmentGroup.course_id !== CourseInfo.id) {
      throw new Error("AssignmentGroup does not belong to the specified course.");
    }

    const result = [];

    LearnerSubmissions.forEach(submission => {
      const assignment = AssignmentGroup.assignments.find(a => a.id === submission.assignment_id);

      if (!assignment || !isAssignmentDue(assignment)) return;

      const learnerIndex = result.findIndex(item => item.id === submission.learner_id);

      if (learnerIndex === -1) {
        result.push({
          id: submission.learner_id,
          scores: [{ id: submission.assignment_id, score: submission.submission.score, points_possible: assignment.points_possible }]
        });
      } else {
        result[learnerIndex].scores.push({ id: submission.assignment_id, score: submission.submission.score, points_possible: assignment.points_possible });
      }
    });

    result.forEach(learner => {
      learner.avg = calculateWeightedAverage(learner.scores);
      learner.scores.forEach(score => {
        learner[score.id] = score.score / score.points_possible;
      });
      delete learner.scores;
    });

    return result;
  } catch (error) {
    return { error: error.message };
  }
}






    const result1 = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);


    console.log(result1)

