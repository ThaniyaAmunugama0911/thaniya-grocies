window.addEventListener("load",()=>{
  const orderData=JSON.parse(localStorage.getItem("orderData"));
  const tbody=document.querySelector("#ordertable tbody");
  const totalElement=document.getElementById("grandtotal");

  let grandTotal=0;

  if (orderData && tbody){
    let tableData="";

    orderData.forEach((item)=>{
      const unitPrice=item.price/item.quantity;
      const totalPriceForItem=item.price;
      grandTotal+=totalPriceForItem;

      tableData+=`
      <tr>
        <td>${item.name}</td>
        <td><img src="${item.image}" alt="${item.name}" style="wdith:50px; height:50px;"></td>
        <td>${item.quantity}</td>
        <td>Rs.${unitPrice.toFixed(2)}</td>
        <td>Rs.${totalPriceForItem.toFixed(2)}</td>
      <tr>
      `;
    })

    tbody.innerHTML=tableData


  }
  if (totalElement){
    totalElement.textContent=`TOTAL: Rs.${grandTotal.toFixed(2)}`;
  }
})

document.querySelector(".order-button").addEventListener("click",()=>{
  const now=new Date();
  const date =now.toLocaleDateString();
  const time=now.toLocaleTimeString();

  alert(`Thank You for shopping with us! \nDate: ${date}\nTime: ${time}`)
})








