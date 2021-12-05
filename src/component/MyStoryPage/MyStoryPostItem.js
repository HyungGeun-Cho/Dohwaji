import "./MyStoryPostItem.scss";

const MyStoryPostItem = ({item}) => {

    var itemId = item.id;


    return (
        <div className="MyStoryPostItem">
            <div className={"MyStoryPostItemTextSection"}>
                <div className={"MyStoryPostItemStorySection"}>
                    <div className={"MyStoryPostItemTimeText"}>이야기 시간</div>
                    <div className={"MyStoryPostItemTime"}>{item.storytime}</div>
                </div>
                <div className={"MyStoryPostItemTitle"}>{item.title}</div>
                <div className={"MyStoryPostItemUploadSection"}>
                    <div className={"MyStoryPostItemTimeText"}>업로드 시간</div>
                    <div className={"MyStoryPostItemTime"}>{item.uploadtime}</div>
                </div>
            </div>

            <img className={"MyStoryPostItemPhoto"} src={require("./busanstreet.JPG").default}></img>
                {/*<img className={"MyStoryPostPhoto"} src={require(itemId+`.JPG`).default} alt={"포스트 이미지"}></img>*/}


            {/*<img className={"MyStoryPostPhoto"} src={require("./busanstreet.JPG").default}></img>*/}

        </div>
    );
};

export default MyStoryPostItem;
