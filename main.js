let queue = ['somu', 'butu', 'ankita', 'virat'];

function registration()
{
    let name = document.getElementById("name").value;
    queue.push(name);

    let message = `${name},your registration is sucessfull WAIT for your turn`;

    alert(message);

    let promise = new Promise(function (resolve, reject)
    {
        setInterval(function () {
            if (queue[0] == name) {
                resolve(`${name} its your turn`);
                //clearInterval(interval);
            }
        

        },1000)
        
    })

    promise.then(function (res) {
        alert(res);
    })
    .catch(function (res) {
        alert('err:', err);
    })



}

function startVaccination()
{
    queue.shift();
    console.log(queue);
}
let interval = setInterval(startVaccination,2000)