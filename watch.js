const fs = require('fs');

// function yelp (what) {
//     return 'hey that ' + what;
// }

const yelp = (what) => {
    return 'hey that ' + what;
}

// fs.watch('README.md', function (event) {
fs.watch('README.md', (event) => {
    console.log(yelp('is so cool'));
});