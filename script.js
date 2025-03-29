document.querySelectorAll(".copy").forEach((item) => {
	item.addEventListener("click", function () {
		const data = this.getAttribute("data");
		navigator.clipboard.writeText(data);
	});
});