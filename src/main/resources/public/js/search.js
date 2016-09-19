$( '.ui.search' ).search( {
	type          : 'category',
	minCharacters : 3,
	apiSettings   : {
		onResponse: function( apiResponse ) {
			var response = {
				results : {}
			};
			$.each( apiResponse._embedded.flashcards, function( index, item ) {
				alert( item.question );
				var maxResults = 10;
				var category = item.category || 'Misc';

				if( index >= maxResults ) {
					return false;
				}

				if( response.results[ category ] === undefined ) {
					response.results[ category ] = {
							name    : category,
							results : []
					};
				}

				response.results[ category ].results.push( {
					title       : item.question,
					description : item.answer,
					url         : item._links.self.href
				});
			});
			return response;
		},
		url: '/api/flashcards/search/findByQuestionLikeIgnoreCase?question={query}'
	}
});