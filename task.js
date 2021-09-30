const numbers =[5, 8, 0, 1, 9, 11, 15, 16];
console.log("Original numbers list: ", numbers)

// function to Bubble sort (ASC Sorting)
function ASC_Sort([...newarr]) {
    for(let i = 0; i < newarr.length; i++)
    {
        for(let j = 0; j < newarr.length - 1; j++)
        {
            if(newarr[j] > newarr[j + 1]) 
            {
                let temp = newarr[j];
                newarr[j] = newarr[j + 1];
                newarr[j + 1] = temp;
            }
        }
    }
    return newarr
}

console.log("Numbers list After sorting: ", ASC_Sort(numbers))


// function to Bubble sort (DESC Sorting)
function DESC_Sort([...newarr]) {
    for(let i = 0; i < newarr.length; i++)
    {
        for(let j = 0; j < newarr.length - 1; j++)
        {
            if(newarr[j] < newarr[j + 1]) 
            {
                let temp = newarr[j];
                newarr[j] = newarr[j + 1];
                newarr[j + 1] = temp;
            }
        }
    }
    return newarr
}

console.log("Numbers list After Desc sorting: ", DESC_Sort(numbers))

console.log("Original numbers list: ", numbers)

// function to read a data file and sort number and store it in output file
function Sort_File() {
    var fs = require('fs');
    var n = fs.readFileSync('data.txt', 'utf-8');
    var filenums = n.split(',');
    filenums = ASC_Sort(filenums);
    var ASCFile = filenums.join(',');
    fs.writeFileSync('output.txt', ASCFile);
}

Sort_File();