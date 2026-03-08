const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");
const container = document.getElementById("cardContainer");
let issue = [];

fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then((res) => res.json())
  .then((data) => {
    issue = data.data;
    showCards(issue);
  });

function showCards(data) {
  container.innerHTML = "";
  data.forEach(issue => {
    const card = `
    
     <div class="max-w-md w-full bg-white rounded-xl shadow-lg border-t-4 border-green-500 overflow-hidden">

      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <div class="flex">
            <img src="assets/Open-Status.png" alt="" class="${issue.status==='open' ? '' : 'hidden'}">
            <img src="assets/Closed- Status .png" alt="" class="${issue.status==='closed' ? '' : 'hidden'}">
            <div class=""></div>
          </div>

          <span class="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm font-semibold">
            HIGH
          </span>
        </div>

        <h2 class="text-xl font-bold text-gray-800 mb-2">
          ${issue.title}
        </h2>

        <p class="text-gray-500 text-sm mb-4">
           ${issue.description}
        </p>

        <div class="flex gap-3">
          <span
            class="flex items-center gap-1 border border-red-300 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
            <i class="fa-solid fa-computer-mouse"></i> BUG
          </span>

          <span
            class="flex items-center gap-1 border border-yellow-400 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
            <img class="w-[15px]" src="assets/Aperture.png" alt=""> HELP WANTED
          </span>
        </div>
      </div>

      <div class="border-t p-4 text-gray-500 text-sm">
        <p>#${issue.id} by ${issue.author}</p>
        <p>${new Date(issue.createdAt)}</p>
      </div>
    </div>
    
    `

    container.innerHTML += card;
  });
}
//all btn
allBtn.addEventListener("click", function () {
  showCards(issues);
});

//open btn

openBtn.addEventListener("click", function () {
  const openIssues = issues.filter(issue => issue.status == "open");
  showCards(openIssues);
});

//closed btn

closedBtn.addEventListener("click", function () {
  const closedIssues = issue.filter(issue => issue.status == "closed");
  showCards(closedIssues);
});

