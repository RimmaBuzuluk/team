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

let totalBudget = 0; //the initial budget is 0 then it is added to the new amount
let cost = {}; //this object will contain the results of calculations (total amount, and sums for different categories)

function calculateTeamFinanceReport(salaries, team) {
  team.forEach((w) => {
    //total sum
    console.log(w.specialization);
    const obj = salaries[w.specialization];
    const persent = obj.tax.match(/\d+/);
    totalBudget += (obj.salary * 100) / (100 - persent);
    cost["totalBudget"] = Math.round(totalBudget);
    //calculate the amount of money spent for categories
    if (typeof cost[w.specialization] !== "undefined") {
      cost[w.specialization] += Math.round(
        (obj.salary * 100) / (100 - persent)
      );
    } else if (typeof cost[w.specialization] === "undefined") {
      cost[w.specialization] = Math.round((obj.salary * 100) / (100 - persent));
    }
    // общий бюджет не соответствует сумме специализаций из-за усечения дробной части
    return cost;
  });
  console.log(cost);
}
calculateTeamFinanceReport(salaries1, team1);
