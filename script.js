//your JS code here. If required.
btn.addEventListener("click", () => {
    let age = document.querySelector("#age").value;
    let name = document.querySelector("#name").value;
	 if (age === "" || name === "") {
        alert("Please enter valid details.");
        return;
    

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            if (age > 18) {
                resolve();
            } else {
                reject();
            }

        }, 4000);

    });

    promise
        .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});
