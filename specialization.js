const salaries1 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};

const team1 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];

let totalBudget = 0;
let cost = {};

function calculateTeamFinanceReport(salaries, team) {
  var lengthSalaries = Object.keys(salaries).length;
  var lengthTean = team.length;

  for (let i = 0; i < lengthSalaries - 1; i++) {
    if (
      Object.values(salaries)[i].tax.match(/\d+/) >= 99 &&
      Object.values(salaries)[i].tax.match(/\d+/) <= 0
    ) {
      return false;
    }
  }

  if (
    lengthSalaries >= 1 &&
    lengthSalaries < 10 &&
    lengthTean < 1000 &&
    lengthTean >= 1
  ) {
    team.forEach((w) => {
      const obj = salaries[w.specialization];
      const percent = obj.tax.match(/\d+/);
      totalBudget += (obj.salary * 100) / (100 - percent);
      cost["totalBudget"] = Math.round(totalBudget);

      if (typeof cost[w.specialization] !== "undefined") {
        cost[w.specialization] += Math.round(
          (obj.salary * 100) / (100 - percent)
        );
      } else if (typeof cost[w.specialization] === "undefined") {
        cost[w.specialization] = Math.round(
          (obj.salary * 100) / (100 - percent)
        );
      }
    });

    console.log(cost);
    return cost;
  } else {
    return false;
  }
}
calculateTeamFinanceReport(salaries1, team1);
