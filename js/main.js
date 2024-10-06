// fetch category function

// crate load categories
const loadCategory = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/categories"
    );
    const data = await res.json();
    displayCategory(data.categories);
  } catch (error) {
    console.error("Error:", error);
  }
};
// loadVideos
const loadVideos= async () => {
    try {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/phero-tube/videos"
      );
      const data = await res.json();
      displayVideo(data.videos )
    } catch (error) {
      console.error("Error:", error);
    }
  };
  loadVideos()

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("categoryBtn");

  categories.forEach((item) => {
    // create a btn
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoryContainer.append(button);
  });
};

loadCategory();

// load video

const displayVideo = (videos)=>{
    const videoContainer = document.getElementById('videos');
    videos.forEach(video =>{
        console.log(video)
        const card = document.createElement('div');
        card.classList='card card-compact bg-base-100  '
        card.innerHTML=`

  
  <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.description}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>

        
        
        
        `
        videoContainer.append(card)

    })


}