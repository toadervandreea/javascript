// variabila menu este definita in data.js

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        return`<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>buttermilk pancakes</h4>
            <h4 class=${item.title}>15 RON</h4>
          </header>
          <p class="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia.
          </p>
        </div>
      </article>`;
    }
    );
}
displayMenu =displayMenu.join("");
sectionCenter.innerHTML =displayMenu;
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category, index) {
      let btn_nr = "btn" + (index + 1);
      const categoryRo = {
        all: "tot",
        breakfast: "mic dejun",
        lunch: "pranz",
        dinner: "cina",
        shakes: "bauturi",
      };

      return `<button> type="button" class="filter-btn" data-id=${category} data-nr=${btn_nr}>
        ${categoryRo[category]}
        </button>`;
    })
    .join("");
    btnContainer.innerHTML = categoryBtns;

    const filterBtns = btnContainer.querySelectorAll(".filter.btn");
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItems){
                if(menuItems.category ===category){
                    return menuItems
                }
            });
            if(category === "all"){
                diplayMenuItems(menu);
            }else{
                diplayMenuItems(menuCategory);
            }
        });
    });
}
