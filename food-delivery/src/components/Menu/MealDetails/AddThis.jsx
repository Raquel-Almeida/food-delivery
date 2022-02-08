import React, { useEffect } from "react";
import Script from "react-load-script";

const AddThis = (props) => {
  useEffect(() => {
    if (window.addthis) {
      window.addthis.update("share", "url", props.url);
    }
  }, [props.url]);

  const handleAddthisLoaded = () => {
    window.addthis.init();
    window.addthis.update("share", "url", props.url);
  };

  return (
    <>
      <div
        className="addthis_inline_share_toolbox"
        data-url={`https://raquel-almeida.github.io/food-delivery/`}
        data-title={"Food Delivery"}
      >
        <Script
          type="text/javascript"
          url="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-61f0637d2b80cee1"
          onLoad={handleAddthisLoaded}
        ></Script>
      </div>
    </>
  );
};

export default AddThis;
