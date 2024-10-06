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
const loadVideos = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/videos"
    );
    const data = await res.json();
    displayVideo(data.videos);
  } catch (error) {
    console.error("Error:", error);
  }
};
loadVideos();
const loadCategoryAlert = async(id)=>{
    try {
        const res = await fetch(
         ` https://openapi.programming-hero.com/api/phero-tube/category/${id}`
        );
        const data = await res.json();
        displayVideo(data.category)
      } catch (error) {
        console.error("Error:", error);
      }
    

}

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("categoryBtn");

  categories.forEach((item) => {
    // create a btn
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button class="btn" onclick="loadCategoryAlert(${item.category_id})">${item.category}</button>
    
    
    `;

   
    categoryContainer.append(buttonContainer);
  });
};

loadCategory();

const getTimeString = (time) => {
  const hour = parseInt(time / 3600);
  let remainingSeconds = parseInt(time % 3600);

  const minute = parseInt(time / 60);
  return `${hour} hour ${minute} minute ${remainingSeconds} seconds ago`;
};


const loadDetails = async(videoId)=>{
    try {
        const res = await fetch(
          `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
        );
        const data = await res.json();
        displayDetails(data.video)
       console.log(data)
      } catch (error) {
        console.error("Error:", error);
      }

}
const displayDetails = (video)=>{
    console.log()
    const detailContainer = document.getElementById("modal-content");
    document.getElementById("customModal").showModal();
    detailContainer.innerHTML=`
    <img src='${video.thumbnail}' alt='' />
    <p>${video.description
}</p>
   
    `

}
// load video

const displayVideo = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";
  if(videos.length == 0){
    videoContainer.classList.remove("grid")
    videoContainer.innerHTML = `
    <div class='min-h-screen  flex flex-col gap-5 justify-center items-center'>
    <img src="../assets/Icon.png " alt=""/>
    <h2 class="text-center text-xl font-bold ">
    Not Content Here This Category
    
    </h2>
    </div>
    
    `;
    return;
  }else{
    videoContainer.classList.add("grid")
  }
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact bg-base-100  ";

    card.innerHTML = `

  
  <figure class="h-[200px] relative">
    <img 
    class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes"  />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `  <span class="absolute right-2 bottom-2 bg-black text-white rounded p-1">${getTimeString(
              video.others.posted_date
            )}</span>`
      }
    
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>
  <img class='w-10 h-10  rounded-full object-cover' src=${
    video.authors[0].profile_picture
  } alt=''/>
  
  
  
  </div>
  <div>
   <h2 class="font-bold">${video.title}</h2>
<div class='flex items-center gap-2 '>
  <p class='text-gray-300'>${video.authors[0].profile_name}</p>
  ${
    video.authors[0].verified === true
      ? `<img class="w-8 h-8" src='https://img.icons8.com/?size=48&id=YZHzhN7pF7Dw&format=gif' alt=''/>`
      : " "
  }

  <button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details</button>
</div>

 
  
  
  </div>
  
  </div>

        
        
        
        `;
    videoContainer.append(card);
  });
};
