    // program to check if the word exists in the grid or not   
    
        //2D array of characters
        let grid=   [['x', 'c', 'a'],
                    ['d', 'y', 't'],
                    ['o', 'g', 'z']]

        //the arrary of words in different scenarios
        let wordsArr=["cat","god","xyz"]

        //looping all words and verifying their existence in the grid
        wordsArr.forEach((word) => {
            searchWord(grid,word) ? console.log(true) : console.log(false)
        })

    /**
     * Function to check if a word exists in a grid starting from the first match in the grid
     * @param grid: provided grid of 2D array
     * @param word: the word to check in the grid
     */
    function searchWord(grid, word)
    {
        let rowSize=grid.length
        let colSize=grid[0].length

        let wordLength = word.length

        // if total characters in matrix is less then pattern length
        if (wordLength > rowSize * colSize)
            return false

        // Traverse in the grid
        for (let i = 0; i < rowSize; i++)
        {
            for (let j = 0; j < colSize; j++)
            {
                // If first letter matches, then recur and check
                if (grid[i][j] == word[0])
                    if (findmatch(grid, word, i, j, rowSize, colSize, 0))
                        return true
            }
        }
        return false
    }

    /**
     * Function to check for any match for each character of the word in the grid in all 4 directions (horizontal and vertical only)
     * @param grid: provided grid of 2D array
     * @param word: the word to check in the grid
     * @param {x, y}: current position of character in 2D array
     * @param rowSize: number of rows for the given grid
     * @param colSize: number of columns for the given grid
     * @param index: index of the current character of the word and will increment till the last character of the word
     */
    function findmatch(grid, word, x, y, rowSize, colSize, index)
    {
        let wordLength = word.length

        // Pattern matched
        if (index == wordLength)
            return true

        // Out of Boundary
        if (x < 0 || y < 0 || x >= rowSize || y >= colSize)
            return false

        // To find grid matches with the letter
        if (grid[x][y] == word[index]){

            // marking this cell as visited
            let temp = grid[x][y];
            grid[x][y] = '#'

            // finding each character in 4 directions and will recur till the whole word matches
            let match =
            findmatch(grid, word, x - 1, y, rowSize, colSize, index + 1) |
            findmatch(grid, word, x + 1, y, rowSize, colSize, index + 1) |
            findmatch(grid, word, x, y - 1, rowSize, colSize, index + 1) |
            findmatch(grid, word, x, y + 1, rowSize, colSize, index + 1)

            // marking this cell as unvisited again
            grid[x][y] = temp
            return match
        }
        else // Not matching then false
            return false;
    }

    
