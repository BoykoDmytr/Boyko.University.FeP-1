# Calculator №54
# Author
Dmytro Boyko FeP-21

dimabojko501@gmail.com

https://t.me/DEMONWASD

# Getting Started
https://universal-calculator.azurewebsites.net/

Press the project start button labeled "http" or in the "PowerShell for Developers" console, execute the command "dotnet run".
# Project Documentation
## Week 1
  
Styles
Defines styles for various elements on the page, including text field dimensions and graphical output.

 HTML Expression Input Form
Contains a form with an input field for mathematical expressions, a button for graph plotting, and a designated block for displaying the graph.

 Scripts Section
- Includes three scripts added to the page:
    1. Expression Parsing Script
    - Loads a library for parsing mathematical expressions.
    2. math.js Library Script
    - Loads the math.js library for computational tasks.
    3. Plotly Library Script
    - Loads the Plotly library for graph plotting.


 JavaScript Functions
These functions perform specific tasks:

- addToExpression(value)
  - Adds a value to the expression in the input field.
- clearExpression()
  - Clears the input field for expressions.
- plotGraph()
  - Plots the graph of the mathematical expression using the Plotly library and performs computations with the math.js library.


  
## Week 2
Calculator
   
Basic Arithmetic Operations: Addition, subtraction, multiplication, and division.
Power and Root Functions: Calculate the power of a number and find its square root.
Percentage Calculation: Determine the percentage of a number.
Trigonometric Functions: Compute sine, cosine, and tangent of an angle.
Logarithmic Function: Calculate the logarithm of a number.

Graph Plotting
   
Math Expression Plot: Enter a mathematical expression, and the tool plots the corresponding graph.
Customizable Graphs: Supports expressions with variables like 'x' and 'y'.
Visualization Range: Graphs are displayed within a specified range on both the X and Y axes.
   
Interface
   
User-Friendly Input: Enter mathematical expressions easily through a dedicated input field.
Keypad for Convenience: Use a keypad with numerical keys and function keys for efficient input.
Responsive Design: The application is designed for usability on various devices.

Usage
   
Calculator Mode: Select the calculator tab, enter an expression, and press the '=' button to calculate the result. 
The answer is displayed below the input field.
Graph Plotting Mode: Switch to the graph plotting tab, enter a math expression with 'x' or 'y', and click the "Plot Graph" button. 
The graph will be displayed in the designated area.

Notes
   
The calculator uses the math.js library for mathematical evaluations.


## Week 3
- Equation Solver

Basic Operations: Solves linear and quadratic equations. Provides step-by-step explanations of the solution process.

Interface

Convenient Input: Easily input mathematical expressions through dedicated input fields.
Keypad for Convenience: Utilize a keypad featuring numerical and functional keys for efficient input.
Responsive Design: The application is designed to be used across various devices.

Usage

Equation Solver Mode: Select the equation solver tab, choose whether to solve a linear or quadratic equation 
by selecting the appropriate checkbox. Press the "Solve Equation" button to compute the result.

Notes

The Equation Solver utilizes the math.js library for mathematical computations.


## Week 4
- Unit Converter

Basic Operations: Converts units of measurement such as Length, Weight, Area, Time, and Volume.

Interface

Convenient Input: Easily input measurement unit data using special input fields. Keyboard for convenience:
Use a keyboard with numerical and functional keys for efficient input. Adaptive Design: The application
is designed for use on various devices.

Usage

Open the converter: Find the element or link on the website to open the unit converter.

  1. Enter value: In the input field, enter the numerical value you want to convert.
  2. Select input unit: Choose the unit of measurement corresponding to your entered value. Select it from the drop-down list.
  3. Select output unit: Choose the unit of measurement to which you want to convert your entered value. Also select it from the drop-down list.
  4. Convert: Press the "Convert" button to get the conversion result.
  5. Get result: After pressing the "Convert" button, you will see the conversion result displayed next to the entered value.

Notes

Nothing


## Week 5
- Matrix Calculator

Basic Operations: Add, subtract, multiply, calculate the determinant, and find the inverse of a matrix

Interface:

Matrix Input: Users can manually input matrices into the text fields designated for Matrix A and Matrix B. 
There is also a selection of operations on matrices such as addition, subtraction, multiplication, determinant calculation, and finding the inverse matrix.
"Calculate Determinant" Button: After inputting the matrix, users can press the "Calculate Determinant" button to compute the determinant of Matrix A.
Displaying Result: The result, whether it's a determinant or an error message, is displayed below the input area.
The same applies to finding the inverse matrix.

Usage:

1. Matrix Input:
  Enter the elements of the matrix into the text field for Matrix A and Matrix B, separating them by spaces or new lines.
  Ensure that each row of the matrix is separated by a new line.
  The elements in each row should be separated by spaces.

2. Determinant Calculation:
  After inputting the matrix, click the "Calculate Determinant" button.
  The determinant of the input matrix will be calculated and displayed below the input area.
  
3. Finding the Inverse Matrix:
  After inputting the matrix, click the "Calculate Inverse Matrix" button.
  The inverse matrix will be found, calculated, and displayed below the input area.

Notes:

To calculate the determinant, matrices must be square (with the same number of rows and columns).
The determinant is displayed rounded to four decimal places.
If any errors occur during calculations, such as invalid inputs or non-square matrices, corresponding error messages will be displayed.
Users must ensure proper formatting of matrices for accurate calculations.


## Week 6
Programming Mode

Basic Operations:

1. Conversion of input value between different numeral systems (decimal, binary, octal, hexadecimal).
2. Displaying converted values in all numeral systems simultaneously.
3. Performing logical and bitwise operations (AND, OR, NOT, XOR).

Interface:

  1. Input Value: Text input field where numerical values can be entered.
  2. Input Format: Dropdown menu to select the format of the input value (decimal, binary, octal, hexadecimal).
  3. Convert and Display Button: Button to initiate conversion and display of values.
  4. Decimal: Read-only input field to display the decimal value.
  5. Binary: Read-only input field to display the binary value.
  6. Octal: Read-only input field to display the octal value.
  7. Hexadecimal: Read-only input field to display the hexadecimal value.

Usage:

For the Converter:
1. Enter the numerical value in the "Input Value" field.
2. Select the input format from the dropdown menu "Input Format".
3. Press the "Convert and Display" button to convert the entered value into all other numeral systems and display them.

For Logical and Bitwise Operations:
1. Enter the numerical value in the "First Value" field.
2. Select the format you want to use.
3. Enter the numerical value in the "Second Value" field.
4. Select the logical operator.
5. Press the "Perform Task" button.

Notes:

Input value can be provided in decimal, binary, octal, or hexadecimal format.
Converted values will be displayed simultaneously in all numeral systems.
For binary, octal, and hexadecimal formats, the corresponding decimal value will also be displayed as input.


## Week 7
- Statistical Functions

Basic Operations
  
1. Calculate Mean:
   - Description: Computes the arithmetic mean of a dataset, which is the sum of all values divided by the number of values.
   - Function: `calculateMean()`

2. Calculate Median:
   - Description: Determines the median value of a dataset, which is the middle value when the data is sorted in ascending order. If the number of values is even, it calculates the average of the two middle values.
   - Function: `calculateMedian()`

3. Calculate Mode:
   - Description: Identifies the mode(s) of a dataset, which is the value(s) that appear most frequently.
   - Function: `calculateMode()`

4. Calculate Standard Deviation:
   - Description: Computes the standard deviation of a dataset, which measures the dispersion of values from the mean. Higher values indicate greater dispersion.
   - Function: `calculateStandardDeviation()`

5. Calculate Variance:
   - Description: Determines the variance of a dataset, which is the square of the standard deviation. It measures the average squared deviation from the mean.
   - Function: `calculateVariance()`

Interface
  
  - Input: Users can input datasets as a list of numbers separated by commas or spaces in a text area provided.
  - Output: The calculated statistical measures are displayed below the input area.

Usage

  1. Click on the "Statistical Functions" button to navigate to the statistical functions tab.
  2. Enter the dataset in the provided text area.
  3. Click on the respective buttons to calculate mean, median, mode, standard deviation, or variance.
  4. View the results displayed below the input area.

Notes

  - Ensure to input numerical values separated by commas or spaces for accurate calculations.
  - These functions provide essential statistical insights into the dataset, aiding in data analysis and understanding patterns.


## Week 8
- Complex Number Support

Basic Operations:

1. Addition: Adds two complex numbers.
2. Subtraction: Subtracts one complex number from another.
3. Multiplication: Multiplies two complex numbers.
4. Division: Divides one complex number by another.

Interface:

- Real Part 1: Input field for the real part of the first complex number.
- Imaginary Part 1: Input field for the imaginary part of the first complex number.
- Real Part 2: Input field for the real part of the second complex number.
- Imaginary Part 2: Input field for the imaginary part of the second complex number.
- Buttons: Buttons to perform basic operations (addition, subtraction, multiplication, division).
- Result: Display area to show the result of the operation.

Usage:

1. Enter the real and imaginary parts of the first complex number in the corresponding input fields.
2. Enter the real and imaginary parts of the second complex number in the corresponding input fields.
3. Click on the button corresponding to the desired operation (addition, subtraction, multiplication, division).
4. The result will be displayed in the result area.

Notes:

- Ensure all input fields are filled before performing an operation.
- Results are displayed in the format "Result: realPart + imaginaryParti", where "i" represents the imaginary unit.
- Verify the correctness of results with known examples to ensure accuracy.

# Project Task Decomposition
- Develop user interface components for graph plotting
- Develop core structure and architecture of the calculator application
- Develop algorithms for solving linear and quadratic equations
- Develop conversion algorithms for various units of measurement
- Develop algorithms for matrix operations such as addition, subtraction, and multiplication
- Develop bitwise operations and logical operators for programming mode
- Develop algorithms for calculating mean, median, mode, standard deviation, and variance
- Develop arithmetic operations for complex numbers


## Week 1
- Implement feature: Graph Plotter ✔
  - Develop user interface components for graph plotting ✔
  - Setup Github repository ✔
  - Test graph plotting feature for accuracy and performance ✔
  - Document graph plotting implementation details ✔

## Week 2
- Implement feature: Scientific Mode ✔
  - Configure Continuous Integration/Continuous Delivery ✔
  - Integrate graph plotting functionality with mathematical calculations ✔
  - Develop core structure and architecture of the calculator application ✔
  - Research and select appropriate libraries or frameworks for mathematical calculations ✔

## Week 3
- Implement feature: Equation Solver ✔
  - Develop algorithms for solving linear and quadratic equations ✔
  - Create user interface elements for inputting equations and displaying solutions ✔
  - Implement step-by-step explanation feature for equation solutions ✔
  - Conduct thorough testing of equation solving functionality ✔

## Week 4
- Implement feature: Unit Converter ✔
  - Design user interface for unit conversion functionality ✔
  - Develop conversion algorithms for various units of measurement ✔
  - Integrate unit conversion feature with other calculator functionalities 🕒
  - Test unit conversion feature with different input values and units ✔
 
## Week 5
- Implement feature: Matrix Calculator ✔
  - Develop algorithms for matrix operations such as addition, subtraction, and multiplication ✔
  - Design user interface elements for matrix input and display ✔
  - Implement determinant calculation and inverse calculation functions ✔
  - Test matrix calculator functionalities with different matrix sizes and values ✔

## Week 6
- Implement feature: Programming Mode ✔
  - Develop bitwise operations and logical operators for programming mode ✔
  - Design user interface for binary, octal, and hexadecimal conversions ✔
  - Integrate programming mode with other calculator functionalities 🕒
  - Test programming mode functionalities with various input values ✔

## Week 7
- Implement feature: Statistical Functions ✔
  - Develop algorithms for calculating mean, median, mode, standard deviation, and variance ✔
  - Create user interface components for inputting datasets and displaying statistical measures ✔
  - Integrate statistical functions with other calculator features 🕒
  - Test statistical functions with different datasets to ensure accuracy ✔

## Week 8
- Implement feature: Complex Number Support ✔
  - Develop arithmetic operations for complex numbers ✔
  - Design user interface for inputting and displaying complex numbers in rectangular and polar forms ✔
  - Integrate complex number support with other calculator functionalities 🕒
  - Test complex number operations with various complex numbers ✔


