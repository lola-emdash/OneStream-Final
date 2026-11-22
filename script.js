const movies = [
 {id:1,title:"Barbie",year:2023,duration:"1h 54m",genre:"Comedy",platform:"HBO Max",rating:"7.0",description:"After an unexpected turn in her picture-perfect world, Barbie sets out on a journey of self-discovery beyond the familiar.",image:"https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51DbEso7OMn.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg"},
 {id:2,title:"Guardians of the Galaxy Vol. 3",year:2023,duration:"2h 30m",genre:"Action",platform:"Disney+",rating:"7.9",description:"The Guardians settle into life on Knowhere, but their lives are turned upside down by the echoes of Rocket's past.",image:"https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii81I3.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGold.jpg"},
 {id:3,title:"Jaws",year:1975,duration:"2h 4m",genre:"Thriller",platform:"Prime Video",rating:"8.1",description:"A small seaside community is thrown into fear when a great white shark appears in the waters just off its coast.",image:"https://image.tmdb.org/t/p/w500/l1yltamizk2do1c7wJg5cA6k5Z.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg"},
 {id:4,title:"Inception",year:2010,duration:"2h 28m",genre:"Action",platform:"Netflix",rating:"8.8",description:"A skilled thief who steals secrets through dream-sharing technology is offered a chance to have his past erased.",image:"https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg"},
 {id:5,title:"The Batman",year:2022,duration:"2h 56m",genre:"Action",platform:"HBO Max",rating:"7.8",description:"When a sadistic killer leaves behind a trail of clues, Batman is drawn into the underworld of Gotham City.",image:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/b0PlSFdDwbyK0cf5RxwDpaErGkl.jpg"},
 {id:6,title:"Moana",year:2016,duration:"1h 47m",genre:"Animation",platform:"Disney+",rating:"7.6",description:"A spirited teenager sails out on a daring mission to save her people, guided by the legendary demigod Maui.",image:"https://image.tmdb.org/t/p/w500/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/1q0gt5z8XqX0bJ1y3wY8q5W9m7x.jpg"},
 {id:7,title:"The Joker",year:2019,duration:"2h 2m",genre:"Drama",platform:"HBO Max",rating:"8.4",description:"In Gotham City, a struggling comedian begins a slow and unsettling transformation that changes the city forever.",image:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"},
 {id:8,title:"Home Alone",year:1990,duration:"1h 43m",genre:"Comedy",platform:"Disney+",rating:"7.7",description:"An eight-year-old is accidentally left behind when his family leaves for the holidays, and he makes the most of it.",image:"https://image.tmdb.org/t/p/w500/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/1uHTuwx5hS3B3I3d8qK8W2Yw6x.jpg"},
 {id:9,title:"The Grand Budapest Hotel",year:2014,duration:"1h 39m",genre:"Comedy",platform:"Disney+",rating:"8.1",description:"The adventures of a legendary concierge and his trusted protégé at a famous European hotel.",image:"https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/nX5XotM9yprCKarRH4fzOq1VM1J.jpg"},
 {id:10,title:"Dune: Part Two",year:2024,duration:"2h 46m",genre:"Adventure",platform:"Max",rating:"8.5",description:"Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",image:"https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"},
 {id:11,title:"Spider-Man: Across the Spider-Verse",year:2023,duration:"2h 20m",genre:"Animation",platform:"Netflix",rating:"8.6",description:"Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting it.",image:"https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5XjTOJ7.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg"},
 {id:12,title:"Knives Out",year:2019,duration:"2h 10m",genre:"Thriller",platform:"Netflix",rating:"7.9",description:"A detective investigates the death of a famous crime novelist, questioning a family full of secrets.",image:"https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg"}
];
const services=[
 {name:"Netflix",category:"Entertainment",logo:"Image/netflix.avif",style:"color:#e50914;font-size:53px;font-family:Arial Black"},
 {name:"Prime Video",category:"Entertainment",logo:"Image/prime.avif",style:"color:#1689df;font-size:22px"},
 {name:"HBO Max",category:"Entertainment",logo:"HBO<span style='color:#8654dc'>max</span>",style:"color:#111;font-size:25px"},
 {name:"Disney+",category:"Entertainment",logo:"Image/disney.avif",style:"color:#1684cf;font-size:25px;font-family:Georgia"},
 {name:"Showmax",category:"Entertainment",logo:"showmax",style:"color:#111;font-size:23px"},
 {name:"YouTube",category:"Entertainment",logo:"Image/yt.avif",style:"color:#111;font-size:22px"},
 {name:"Crunchyroll",category:"Entertainment",logo:"Image/crunchy.avif",style:"color:#f36a21;font-size:17px"},
 {name:"Paramount+",category:"Entertainment",logo:"Paramount+",style:"color:#0875df;font-size:19px"},
 {name:"Apple TV+",category:"Entertainment",logo:"Image/apple.avif",style:"color:#111;font-size:27px"},
 {name:"Hulu",category:"Entertainment",logo:"hulu",style:"color:#1bc47d;font-size:35px"},
 {name:"Peacock",category:"Entertainment",logo:"peacock",style:"color:#111;font-size:23px"},
 {name:"CNN",category:"News",logo:"CNN",style:"color:#e21b2d;font-size:34px"},
 {name:"ESPN",category:"Sports",logo:"ESPN",style:"color:#d71920;font-size:35px"},
 {name:"Coursera",category:"Education",logo:"coursera",style:"color:#1769aa;font-size:23px"}
];
let watchlist=JSON.parse(localStorage.getItem("oneStreamWatchlist")||"[]");
let selectedGenre="All",selectedPlatform="All",selectedCategory="All",activeMovie=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function posterCard(movie){
    return `<article class="movie-card" data-id="${movie.id}" tabindex="0" aria-label="View 
    ${movie.title} details"><div class="poster"><img loading="lazy" src="
    ${movie.image}" alt="
    ${movie.title} poster" onerror="this.style.opacity='.15'"><span class="poster-badge">
    ${movie.platform}</span></div><div class="poster-info"><h3>
    ${movie.title}</h3><p>${movie.year} · 
    ${movie.genre} · ★ 
    ${movie.rating}</p></div></article>`
}
function renderPopular(){ 
    $("#popularRow").innerHTML=movies.slice(0,6).map(posterCard).join("");
}
function renderDiscover(){
    let q=$("#searchInput").value.trim().toLowerCase();
    let filtered=movies.filter(m=>(selectedGenre==="All"||m.genre===selectedGenre)&&(selectedPlatform==="All"||m.platform===selectedPlatform)&&(m.title.toLowerCase().includes(q)||m.genre.toLowerCase().includes(q)||m.platform.toLowerCase().includes(q)));
    $("#discoverGrid").innerHTML=filtered.map(posterCard).join("");
    $("#resultsTitle").textContent=q?`Results for “${q}”`:"Explore titles";
    $("#resultCount").textContent=`${filtered.length} titles`;
    $("#emptyState").classList.toggle("hidden",filtered.length>0);
    $("#clearSearch").style.display=q?"block":"none";
}
function renderWatchlist(){
    let list=movies.filter(m=>watchlist.includes(m.id));
    $("#watchlistGrid").innerHTML=list.map(posterCard).join("");
    $("#watchlistEmpty").classList.toggle("hidden",list.length>0);
    $("#watchlistGrid").classList.toggle("hidden",list.length===0);
    $("#watchCount").textContent=watchlist.length;
}
function renderServices(){
    let shown=services.filter(s=>selectedCategory==="All"||s.category===selectedCategory);
    $("#subscriptionGrid").innerHTML=shown.map(s=>`<button class="service-card 
        ${localStorage.getItem("service-"+s.name)==="yes"?"connected":""}" data-service="
        ${s.name}">
        <span class="connect-state">Added</span>
        <span class="service-logo" style="${s.style}">
    ${s.logo.endsWith(".avif") || s.logo.endsWith(".avif")
        ? `<img src="${s.logo}" alt="${s.name} logo">`
        : s.logo}
</span>
        <small>${s.name}</small></button>`).join("");
    $("#appCount").textContent=`${shown.length} apps`;}
function go(page){$$(".page").forEach(p=>p.classList.remove("active"));
    $(`#${page}Page`).classList.add("active");
    $$(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
    $(".main-nav").classList.remove("open");
    window.scrollTo({top:0,behavior:"smooth"});
    if(page==="watchlist")renderWatchlist();
    if(page==="discover")renderDiscover();
    if(page==="subscriptions")renderServices();
}
function openMovie(id){
    activeMovie=movies.find(m=>m.id===Number(id));
    if(!activeMovie)return;
    $("#modalTitle").textContent=activeMovie.title;
    $("#modalPlatform").textContent=activeMovie.platform;
    $("#modalMeta").textContent=`
    ${activeMovie.year} · 
    ${activeMovie.duration} · 
    ${activeMovie.genre} · ★ 
    ${activeMovie.rating}`;
    $("#modalDescription").textContent=activeMovie.description;
    $("#modalArt").style.backgroundImage=`url("${activeMovie.backdrop}")`;
    $("#modalWatchlist").textContent=watchlist.includes(activeMovie.id)?"✓ Added to watchlist":"＋ Add to watchlist";
    $("#movieModal").classList.add("open");
    $("#movieModal").setAttribute("aria-hidden","false");
}
function closeModal(id){
    $(`#${id}`).classList.remove("open");
    $(`#${id}`).setAttribute("aria-hidden","true");
}
let toastTimer;function toast(msg){
    let t=$("#toast");
    t.textContent=msg;t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>t.classList.remove("show"),2300)
}
function toggleWatch(id){
    id=Number(id);watchlist=watchlist.includes(id)?watchlist.filter(x=>x!==id):[...watchlist,id];
    localStorage.setItem("oneStreamWatchlist",JSON.stringify(watchlist));
    renderWatchlist();
    $("#watchCount").textContent=watchlist.length;if(activeMovie&&activeMovie.id===id)
        $("#modalWatchlist").textContent=watchlist.includes(id)?"✓ Added to watchlist":"＋ Add to watchlist";
    toast(watchlist.includes(id)?"Added to your watchlist":"Removed from your watchlist");
}
document.addEventListener("click",e=>{let nav=e.target.closest("[data-page]");
    if(nav)go(nav.dataset.page);
    let goBtn=e.target.closest("[data-go]");
    if(goBtn)go(goBtn.dataset.go);
    let card=e.target.closest(".movie-card");
    if(card)openMovie(card.dataset.id);let close=e.target.closest("[data-close]");
    if(close)closeModal(close.dataset.close);let service=e.target.closest("[data-service]");
    if(service){let key="service-"+service.dataset.service;let add=localStorage.getItem(key)!=="yes";
        localStorage.setItem(key,add?"yes":"no");
        renderServices();toast(add?`
            ${service.dataset.service} added to your apps`:`
            ${service.dataset.service} removed from your apps`);}});
document.addEventListener("keydown",e=>{if(e.key==="Escape")$$(".modal-backdrop.open").forEach(m=>closeModal(m.id));
    if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("movie-card"))openMovie(e.target.dataset.id)});
$("#searchShortcut").addEventListener("click",()=>{go("discover");setTimeout(()=>$("#searchInput").focus(),100)});
$("#menuButton").addEventListener("click",()=>$(".main-nav").classList.toggle("open"));
$("#profileButton").addEventListener("click",()=>go("profile"));
$("#searchInput").addEventListener("input",renderDiscover);
$("#clearSearch").addEventListener("click",()=>{$("#searchInput").value="";renderDiscover();$("#searchInput").focus()});
$("#genreFilters").addEventListener("click",e=>{
    let b=e.target.closest("[data-genre]");
    if(!b)return;selectedGenre=b.dataset.genre;$$("[data-genre]").forEach(x=>x.classList.toggle("selected",x===b));renderDiscover()});
$("#platformFilters").addEventListener("click",e=>{
    let b=e.target.closest("[data-platform]");
    if(!b)return;selectedPlatform=b.dataset.platform;$$("[data-platform]").forEach(x=>x.classList.toggle("selected",x===b));renderDiscover()});
$("#resetFilters").addEventListener("click",()=>{selectedGenre=selectedPlatform="All";
    $("#searchInput").value="";
    $$("[data-genre],[data-platform]").forEach(b=>b.classList.toggle("selected",b.dataset.genre==="All"||b.dataset.platform==="All"));renderDiscover()});
$("#subscriptionFilters").addEventListener("click",e=>{
    let b=e.target.closest("[data-category]");
    if(!b)return;selectedCategory=b.dataset.category;
    $$("[data-category]").forEach(x=>x.classList.toggle("selected",x===b));renderServices()});
$("#modalWatchlist").addEventListener("click",()=>{
    if(activeMovie)toggleWatch(activeMovie.id)});
$("#trailerButton").addEventListener("click",()=>toast("Trailer links can be connected when provider integrations are added."));
$("#movieModal").addEventListener("click",e=>{
    if(e.target.id==="movieModal")closeModal("movieModal")});
$("#signInModal").addEventListener("click",e=>{
    if(e.target.id==="signInModal")closeModal("signInModal")});
$("#signInForm").addEventListener("submit",e=>{e.preventDefault();$("#formMessage").textContent="Demo form submitted. Connect an authentication service to enable real accounts.";});
$("#switchToSignUp").addEventListener("click",()=>{$("#signTitle").textContent="Create your One Stream account.";
    $("#signInForm button").textContent="Create account";
    $("#formMessage").textContent="Account creation needs a backend authentication service.";});
renderPopular();renderDiscover();renderWatchlist();renderServices();


// Profile and settings page interactions (front-end prototype)
let activeAccountProfile=localStorage.getItem("oneStreamProfile")||"Eyo";
let activeAccountEmail=localStorage.getItem("oneStreamEmail")||"Eyo@gmail.com";
const accountProfileImages={
 Eyo:"Image/eyo-avatar.jpg",John:"Image/john-profile.jpg",Steve:"Image/steve-profile.jpg",
 Doe:"Image/doe-profile.jpg",Jane:"Image/jane-profile.jpg"
};
function refreshAccountProfile(){
 const name=$("#mainProfileName"),email=$("#mainProfileEmail"),avatar=$("#mainProfileAvatar");
 if(!name)return;
 name.textContent=activeAccountProfile;email.textContent=activeAccountEmail;
 avatar.src=accountProfileImages[activeAccountProfile]||accountProfileImages.Eyo;
 avatar.alt=activeAccountProfile+" profile picture";
 $("#settingsProfileEmail").textContent=activeAccountEmail;
 $$(".profile-choice").forEach(btn=>btn.classList.toggle("selected",btn.dataset.profile===activeAccountProfile));
}
function showAccountModal(title,html){
 $("#accountModalTitle").textContent=title;
 $("#accountModalContent").innerHTML=html;
 $("#accountSettingsModal").classList.add("open");
 $("#accountSettingsModal").setAttribute("aria-hidden","false");
}
$("#profilesStrip").addEventListener("click",e=>{
 const choice=e.target.closest("[data-profile]");if(!choice)return;
 activeAccountProfile=choice.dataset.profile;
 localStorage.setItem("oneStreamProfile",activeAccountProfile);
 refreshAccountProfile();toast("Switched to "+activeAccountProfile+"'s profile");
});
$("#editProfileButton").addEventListener("click",()=>{
 showAccountModal("Edit profile",`<form class="account-form" id="accountProfileForm">
 <label>Profile name<input id="accountNameInput" value="${activeAccountProfile}" required></label>
 <label>Email address<input id="accountEmailInput" type="email" value="${activeAccountEmail}" required></label>
 <button class="primary-button" type="submit">Save changes</button></form>`);
});
$$("[data-setting]").forEach(btn=>btn.addEventListener("click",()=>{
 const type=btn.dataset.setting;
 const templates={
  profile:["Profile",`<form class="account-form" id="accountProfileForm"><label>Profile name<input id="accountNameInput" value="${activeAccountProfile}" required></label><label>Email address<input id="accountEmailInput" type="email" value="${activeAccountEmail}" required></label><button class="primary-button" type="submit">Save changes</button></form>`],
  security:["Security and access",`<form class="account-form" id="securityDemoForm"><label>Current password<input type="password" required></label><label>New password<input type="password" minlength="8" required></label><button class="primary-button">Update password</button><p class="modal-hint">This prototype does not connect to an authentication server yet.</p></form>`],
  app:["App Settings",`<label class="account-toggle">Autoplay previews <input type="checkbox" checked></label><label class="account-toggle">Personalised recommendations <input type="checkbox" checked></label><label class="account-toggle">Compact display <input type="checkbox"></label>`],
  plan:["Subscription plan",`<p class="modal-hint">Manage the streaming services you have added to One Stream.</p><button class="primary-button" data-go="subscriptions">View my apps</button>`],
  notifications:["Notifications",`<label class="account-toggle">New recommendations <input type="checkbox" checked></label><label class="account-toggle">Watchlist reminders <input type="checkbox" checked></label><label class="account-toggle">Product updates <input type="checkbox"></label>`],
  language:["Language",`<form class="account-form" id="languageDemoForm"><label>Choose language<select><option>English</option><option disabled>French (coming soon)</option><option disabled>Spanish (coming soon)</option></select></label><button class="primary-button">Save preference</button></form>`]
 };
 showAccountModal(templates[type][0],templates[type][1]);
}));
$("#profilePage").addEventListener("click",e=>{
 const action=e.target.closest("[data-profile-action]");if(!action)return;
 const what=action.dataset.profileAction;
 if(what==="subscriptions")go("subscriptions");
 if(what==="settings")go("settings");
 if(what==="help")showAccountModal("Help",'<p class="modal-hint">Help and support information will be available here.</p>');
 if(what==="signout"){go("home");toast("You have signed out of this demo.");}
});
$("#accountModalContent").addEventListener("submit",e=>{
 e.preventDefault();
 if(e.target.id==="accountProfileForm"){
  activeAccountProfile=$("#accountNameInput").value.trim()||activeAccountProfile;
  activeAccountEmail=$("#accountEmailInput").value.trim()||activeAccountEmail;
  localStorage.setItem("oneStreamProfile",activeAccountProfile);
  localStorage.setItem("oneStreamEmail",activeAccountEmail);
  refreshAccountProfile();closeModal("accountSettingsModal");toast("Profile updated");
 }else if(e.target.id==="securityDemoForm"){toast("Connect authentication to enable password changes.");}
 else if(e.target.id==="languageDemoForm"){closeModal("accountSettingsModal");toast("Language preference saved in this demo.");}
});
$("#accountSettingsModal").addEventListener("click",e=>{
 if(e.target.id==="accountSettingsModal")closeModal("accountSettingsModal");
});
refreshAccountProfile();
