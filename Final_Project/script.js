function loadRepo(repo_url, callback) {
  const gitHubRequest = new XMLHttpRequest();
  gitHubRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  }
  gitHubRequest.open('GET', repo_url, true);
  gitHubRequest.send();
}


function loadRepoCallback(gitHubRequest) {
  let repos = JSON.parse(gitHubRequest.responseText);
  // console.log(repos);
    let listStarter = document.getElementById('gitList');
    listStarter.innerHTML = "";
  for(i=0; i<repos.length;i++){
    // console.log(repos[i].name);
    //console.log(repos[i].html_url);
    let listItems = document.createElement('li');
    listItems.innerHTML = " <a href= " + repos[i].html_url + "' target =_blank '>" + repos[i].name + "<a>";
    listStarter.appendChild(listItems); 
  } //console.log(document.getElementsByClassName('listItems').innerHTML);
}

//  document.ready(loadRepo);
// alert("testing");
// $(document).ready(function(){
// $( '#icon' ).hover(
//   function(){
//     $(this).css('font-size','125%');
//     }, function(){
//     $(this).css( 'font-size','100%' );
//   })
// })
// $(document).ready(function(){
//   $('#icon').hover(function(){
//       $(this).css('font-size', '125%')
//     }, function(){
//       $(this).css('font-size', '100%')
//     })
//   });

// $(document).ready(function(){
// $( "#gitHubIcon" ).hover(
//   function() {
//     $( this ).css("height","3em");
//     $( this ).css("width","3em");
//   }, function() {
//     $( this ).css( "height","2em" );
//     $( this ).css( "width","2em" );
//   })
// });

// $("#linkedIn").hover(function(){
//   $(this.linkedIn).onmouseout({
      
//       height: '+=1em',
//       width: '+=1em'
//   });
// }); 
