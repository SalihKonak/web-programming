function showDistrict(districtId) {
    const container = document.getElementById("district_summary");
    const district = document.getElementById(districtId);

    const districts = ["mitte", "bad_cannstadt", "nord", "unterturkheim"];
    districts.forEach(function(id) {
        document.getElementById(id).style.display = "none";
    });

    const placeholder = container.querySelector("p");
    if (placeholder) {
        placeholder.style.display = "none";
    }
    district.style.display = "flex";
}
