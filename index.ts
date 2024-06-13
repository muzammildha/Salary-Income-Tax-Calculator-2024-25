import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright("=".repeat(60)))

console.log(chalk.bold.yellow("Income tax calculator 2024-2025"))

console.log(chalk.magentaBright("=".repeat(60)))

let userInput = await inquirer.prompt(
    [
        {
            name:"MonthlySalary",

            type:"number",

            message:chalk.red("Enter Your Monthly Salary")

        }
    ]
)

let annnualSalary = (userInput.MonthlySalary * 12);

console.log(chalk.blue(`Your Annual salary is ${annnualSalary}`))

if (annnualSalary <= 600000){

    console.log(chalk.green("Your Income Tax is 0"))

} else if (annnualSalary > 600000 && annnualSalary <= 1200000){

     let annualTax5Percent = ((annnualSalary - 600000) /( 100) *5)

     console.log(chalk.green(`Your Annual tax is ${annualTax5Percent}`) )

     console.log(chalk.green(`Your Monthly income tax is ${annualTax5Percent / 12}`))

} else if (annnualSalary > 1200000 && annnualSalary <= 2200000){

    let annualTax15Percent = ((annnualSalary - 1200000 ) /( 100) *(15)+ 30000)

    console.log(chalk.green(`Your Annual Tax is ${annualTax15Percent}`))

    console.log(chalk.green(`Your Monthly income tax is ${annualTax15Percent / 12}`))


 
 } else if (annnualSalary > 2200000 && annnualSalary <= 3200000){

     let annualTax25Percent = ((annnualSalary - 2200000 ) /( 100) *(25) + 180000)

     console.log(chalk.green(`Your Annual Tax is ${annualTax25Percent}`))

     console.log(chalk.green(`Your Monthly income tax is ${annualTax25Percent / 12}`))

 
  }else if (annnualSalary > 3200000 && annnualSalary <= 4100000){

    let annualTax30Percent = ((annnualSalary - 2200000 ) /( 100) *(30) + 430000)

    console.log(chalk.green(`Your Annual Tax is ${annualTax30Percent}`))

    console.log(chalk.green(`Your Monthly income tax is ${annualTax30Percent / 12}`))


 }else if (annnualSalary > 4100001 ){

    let annualTax35Percent = ((annnualSalary - 4100000) /( 100) *(35) + 700000)

    console.log(chalk.green(`Your Annual Tax is ${annualTax35Percent}`))

    console.log(chalk.green(`Your Monthly income tax is ${annualTax35Percent / 12}`))

 }



