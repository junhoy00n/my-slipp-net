$(".answer-writer input[type=submit]").click(addAnswer);

function addAnswer(e) {
	console.log("click!");
	e.preventDefault();
	
	var queryString = $(".answer-writer").serialize();
	console.log("query : " + queryString);
	
	var url = $(".answer-write").atter("action");
	console.log("url : " + url);
	
	$.ajax({
		type : 'post',
		url : url,
		data : queryString,
		dataType : 'json',
		error : onError,
		success : onSuccess});
}

function onError() {
	
}

funtion onSuccess(data, status) {
	console.log(data);
	var answerTemplate = $("#answerTemplate").html()
	var template = answerTemplate.format(data.writer.userId, data.formattedCreateDate, data.contents, data.question.id ,data.id);
	$(".qna-comment-slipp-articles").prepend(template);
	
	$("#answer-wrtie textarea").val("");
}

$("a.link-delete-article").click(deleteAnswer);

function deleteAnswer(e) {
	e.preventDefault();
	
	var deleteBtn = $(this);
	var url = deleteBtn.attr("href");
	console.log("url : " + url);
	
	$.ajax({
		type : 'delete',
		url : url,
		dataType : 'json',
		error : function (xhr, status) {
			console.log("error");
		},
		success : function (data, status) {
			console.log(data);
			if (data.valid) {
				deleteBtn.closeset("article").remove();
			}
			else {
				alert(data.errorMessage);
			}
		}
	})
}

String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined'
        ? args[number]
        : match
        ;
  });
};