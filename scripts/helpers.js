const Helpers = {
  selectFile: (contentType, multiple = false) => {
    return new Promise((resolve) => {
      let input = document.createElement("input");
      input.type = "file";
      input.multiple = multiple;
      input.accept = contentType;
      input.onchange = () => {
        let files = Array.from(input.files);
        if (multiple) resolve(files);
        else resolve(files[0]);
      };
      input.click();
    });
  },
  downloadFile: (data, name = "") => {
    var urlCreator = window.URL || window.webkitURL;
    if (!name) {
      name = Date.now() + ".json";
    }
    const link = document.createElement("a");
    const type = name.split(".").pop().toLowerCase();
    link.setAttribute("download", name);
    switch (type) {
      case "json":
        link.href = `data:application/json;charset=utf-8,${encodeURIComponent(
          data
        )}`;
        break;
      case "png":
      case "jpg":
      case "bmp":
      case "jpeg":
        link.href = `${data}`;
        break;
      case "svg":
        link.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
          data
        )}`;
        break;
      default:
        break;
    }
    link.click();
  },
};
