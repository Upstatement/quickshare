services_lib['hacker-news'] = {
    extractParams: _defaultParams,
    makeUrl: function(params) {
        var href_url = 'http://news.ycombinator.com/submitlink?u=' +  params.src_url + _mightInclude('&t=', params.title);
        return href_url;
    },
    getCount : function(url, callback) {
        $.ajax({
          url: "https://hn.algolia.com/api/v1/search?query=%22"+url+"%22&tags=story&advancedSyntax=true&attributesToRetrieve=points,url",
          success: function(data) {
            console.log(data);
            if(data.hits.length > 0)
              callback(data.hits[0].points);
            else
              callback(0);
          },
          crossDomain: true
        });
    },
    icon: 'external-link'
};
