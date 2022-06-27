
        let input1 = "";
        let input2 = "";

        function start() {

            let message = document.querySelector("#message")
            let mInput1 = document.querySelector("#mInput1")
            let mInput2 = document.querySelector("#mInput2")
            let mResult = document.querySelector("#mResult")

            mInput1.innerHTML = "";
            mInput2.innerHTML = "";
            mResult.innerHTML = "";


            input1 = +document.querySelector("#input1").value;
            input2 = +document.querySelector("#input2").value;

            if (input1 !== input2) {
                alert("Please enter the same number for both inputs");
                return;
            }
            if (isNaN(input1) || isNaN(input2)) {
                alert("Please enter a number");
                return;
            }
            if (input1 < 2 || input2 < 2) {
                alert("Please enter a number greater than 1");
                return;
            }


            for (let i = 0; i < input1; i++) {
                for (let j = 0; j < input2; j++) {
                    console.log("running");
                    mInput1.innerHTML +=
                        `<input type="number" required min="0" max="100" id="m1-${i}-${j}" value="0">`;
                    mInput2.innerHTML +=
                        `<input type="number" required min="0" max="100" id="m2-${i}-${j}" value="0">`;
                    mResult.innerHTML +=
                        `<input type="number" disabled required min="0" max="100" id="mResult-${i}-${j}" value="0">`;
                }
                mInput1.innerHTML += `<br>`;
                mInput2.innerHTML += `<br>`;
                mResult.innerHTML += `<br>`;
            }
            document.querySelector("#metrixInputForm").classList.remove("hidden");

        }


        function box() {

            let matrix1 = [];
            let matrix2 = [];

            for (let i = 0; i < input1; i++) {
                for (let j = 0; j < input2; j++) {
                    console.log("running");
                    if (matrix1[i] === undefined) matrix1[i] = []
                    if (matrix2[i] === undefined) matrix2[i] = []

                    matrix1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
                    matrix2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
                }
            }


            let x = document.getElementById('option').value
             console.log(x)



           if (x == '+') {
            
               let result = sum(matrix1, matrix2);
   
               for (let i = 0; i < result.length; i++) {
                   for (let j = 0; j < result[i].length; j++) {
                       document.querySelector(`#mResult-${i}-${j}`).value = result[i][j];
                   }
               }
           } else if (x == '-') {
            let result = sub(matrix1, matrix2);
   
            for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < result[i].length; j++) {
                    document.querySelector(`#mResult-${i}-${j}`).value = result[i][j];
                }
            }
           } else if (x == '*'){
            let result = mul(matrix1, matrix2);
            for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < result[i].length; j++) {
                    document.querySelector(`#mResult-${i}-${j}`).value = result[i][j];
                }
            }
           }
        }

        function mul(matrix1, matrix2) {
            var aNumRows = matrix1.length, aNumCols = matrix1[0].length,
                bNumRows = matrix2.length, bNumCols = matrix2[0].length,
                result = new Array(aNumRows);  // initialize array of rows
            for (var r = 0; r < aNumRows; ++r) {
                result[r] = new Array(bNumCols); // initialize the current row
                for (var c = 0; c < bNumCols; ++c) {
                    result[r][c] = 0;             // initialize the current cell
                    for (var i = 0; i < aNumCols; ++i) {
                        result[r][c] += matrix1[r][i] * matrix2[i][c];
                    }
                }
            }
            return result;
        }
        function sum(matrix1, matrix2) {
            let result = [];
            for (let i = 0; i < matrix1.length; i++) {
                result[i] = [];
                for (let j = 0; j < matrix1[i].length; j++) {
                    result[i][j] = matrix1[i][j] + matrix2[i][j];
                }
            }
            return result;
        }
        function sub(matrix1, matrix2) {
            let result = [];
            for (let i = 0; i < matrix1.length; i++) {
                result[i] = [];
                for (let j = 0; j < matrix1[i].length; j++) {
                    result[i][j] = matrix1[i][j] - matrix2[i][j];
                }
            }
            return result;
        }

    