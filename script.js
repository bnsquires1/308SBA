// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
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

// The provided learner submission data.
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

//use slice method to copy learner submissions for learner_id: 125 , exclude submitted assignment not yet due.
let learner125 = LearnerSubmissions.slice(1, 3)

console.log("learner_id: ", learner125)
console.log("original array:", LearnerSubmissions)


LearnerSubmissions.forEach((submission) => {
    if (submission.assignment_id === assignment.id) 
        let learnerId = submission.learner_id
    } 
    if (!results[learnerId]) {
        results[learnerId] = {
            totalScore: 0,
            totalPossible: 0,
            assignmentsIncluded: 0
        };
    });

    console.log(learnerId)

    const adjustedScore = (submission.submission, assignment.points_possible, assignment.due_at);

    results[learnerId].totalScore += adjustedScore;
    results[learnerId].totalPossible += assignment.points_possible;
    results[learnerId].assignmentsIncluded++;
    
    // Calculate average score for each learner
    for (const learnerId in results) {
        if (results.hasOwnProperty(learnerId)) { // boolean
            const learnerResult = results[learnerId];
            if (learnerResult.assignmentsIncluded > 0) {
                learnerResult.averageScore = (learnerResult.totalScore / learnerResult.totalPossible) * 100;
            } else {
                learnerResult.averageScore = 0;
            }
        }
    }

    function getLearnerData(course, ag, submissions) {
        // here, we would process this data to achieve the desired result.
        const result = [
          {
            id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0 // 150 / 150
          },
          {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833 // late: (140 - 15) / 150
          }
        ];
    
        // Calculate the score, accounting for lateness
                let grade = submissions.scores;
                        if ((submission.submission.submitted_at) > (assignment.due_at)) {
                            grade -= assignment.points_possible * 0.1; // Late penalty
                        }
