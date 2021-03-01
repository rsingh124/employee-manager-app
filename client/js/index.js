/* 
         APP CHOICES
         vanilla js  works in the browser

         es modules they work in the browser but using advanced or new js features you need a bundler
         async await (.then()) are not supported in es mods TC-39
         node_modules using npm feagtures you want to use.
         bundler  makes new js accessible to browser
         new js accessible to old browser.
         parcel no config bunlder

         functions as class

         NODE.js ----> Commonjs npm


*/

window.addEventListener('load', function(e) {
    // API URL   http://localhost:3000......    endpoint  path to a file or folder
    // API END POINT
    // CALL TO THE API---> api/v1/employees
    const url = "http://localhost:3000/api/v1/employees"
    async function getData (){
        const req = await fetch(url);
        const result = await req.json();
        console.log(result)
    }

    getData();
})