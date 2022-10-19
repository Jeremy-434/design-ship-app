var div = document.getElementById("productos");
var totalPrice = document.getElementById("totalPrice");

// ASYNC AWAIT FETCH
const obtainProducts = async () => {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/productos');
        console.log(res);
        const data = await res.json();
        console.log(data);
        await data.forEach(product => {
            div.innerHTML += `
        <div class="grid grid-cols-12 items-center">
        <div class="col-span-12 sm:col-span-6 md:col-span-8 flex">
            <img class="border-4 border-gray-300 rounded-xl w-20 h-20 lg:w-24 lg:h-24 m-2 mt-0" src="/public/imgs/logo.png"
                alt="">
            <div class="text-xs sm:text-lg lg:my-2">
                <h2 class="text-base sm:text-xl">${product.nombre}</h2>
                <p><i class="text-sky-400">${product.descripcion}</i></p>
                <p>Stock: ${product.stock}</p>
            </div>
        </div>
        <div class="col-start-8 col-end-10 sm:col-start-10 sm:col-end-12 md:col-start-9 md:col-end-12 flex justify-around text-xl sm:text-3xl mb-2 lg:mb-0">
            <p class="line-through"><i class="text-xs no-underline relative bottom-3">$</i>64</p>
            <p class="text-green-500"><i class="text-xs no-underline relative bottom-3">$</i>${product.precio}</p>
            <button class="text-red-500 hover:text-red-700 cursor-pointer"><i id="trashIcon" class="bi bi-trash" value="${product.id}"></i></button>
            </div>
    </div>
        `;
        });
        //sumar precios
        let total = 0;
        data.forEach(product => {
            let price = product.precio;
            total += parseInt(price);
        });
        totalPrice.innerHTML = total;
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let trashIcon = document.getElementById("trashIcon");
        trashIcon.addEventListener("click", async () => {
            try {
                const res = await fetch(`http://127.0.0.1:8000/api/productos/${trashIcon.value}`, options);
                console.log(trashIcon.value);
                console.log("asd", res);
                const data = await res.json();
                console.log(data);
                // data.forEach(product => {
                //     res += product.id;
                // });
            } catch (error) {
                console.log(error);
            }
        });



    } catch (error) {
        console.log(error);
    }
}

obtainProducts();


// async function deleteProduct() {
//     try {
//         const res = await fetch('http://127.0.0.1:8000/api/productos/');
//         // console.log(res);
//         // const data = await res.json();
//         // console.log(data);
//         // await data.forEach(product => {
//         //     res += product.id;
//         // });
//     } catch (error) {
//         console.log(error);
//     }
// }




