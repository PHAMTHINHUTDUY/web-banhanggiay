// trang html load xong code mới chạy
$(document).ready(function () {
    // Kích hoạt tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Xử lý chọn/ bỏ chọn
    var checkbox = $('table tbody input[type="checkbox"]');
	// Xử lý khi click checkbox "Select All"
    $("#selectAll").click(function () {
        if (this.checked) {
            checkbox.each(function () {
                this.checked = true;
            });
        } else {
            checkbox.each(function () {
                this.checked = false;
            });
        }
    });
	//Xử lý khi click vào từng checkbox con
    checkbox.click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });
});