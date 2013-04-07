
function searchGallery(query, callback) {
    var imgur_client_id = 'e5f1196e157b721';

    $.ajax({
       url: "https://api.imgur.com/3/gallery/search",
       data: { q: query },
       type: "GET",
       dataType: "json",
       beforeSend: function(xhr){ xhr.setRequestHeader('Authorization', 'Client-ID ' + imgur_client_id); },
       success: function(response) { 
            callback(response.data);
       }
   });
}