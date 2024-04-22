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



function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {

  // 1.AssignmentGroup does not belong to its course (mismatching course_id)
  try {
    if (AssignmentGroup.course_id !== CourseInfo.id) {
      throw new Error("AssignmentGroup does not belong to the specified course.");
    }

  } catch (error) {
    return { error: error.message };
  }

}

  // Create an object to store learner data
  let learnerData = {};

  // Iterate over each submission
  let submissions ,forEach(submission => {
    const { learner_id, assignment_id, submission: { score, submitted_at } } = submission;

    // If learner_id not in learnerData, initialize it
    if (!learnerData[learner_id]) {
      learnerData[learner_id] = {
        id: learner_id,
        totalScore: 0,
        totalPoints: 0,
        avg: 0
      };
    
    }
  
    const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);


console.log(result)
  })
