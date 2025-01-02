import styled from "styled-components";

interface TabPropo {
    tabList: TabItem[],
    changeTab: (tabList: TabItem[]) => void;
}
export interface TabItem {
    title: string;
    content: React.JSX.Element;
    isActive: boolean;
}

const TabStyle = styled.div`
    .tab-container {
        display: flex;
        flex-direction: column;
        /* padding: 0 24px 30px 24px; */
        .tab-title-container {
            display: flex;
            align-items: center;
            .tab-title {
                margin-right: 24px;
                padding-bottom: 10px;
            }
            .active {
                font-weight: 600;
                border-bottom: 3px solid var(--blue);
                color: black;
            }
        }
        
        .tab-content {

        }
    }
`;

export default function Tab({tabList, changeTab}: TabPropo) {
    const tabSelected = tabList.filter((item) => item.isActive)[0];
    const handleTabClick = function(item: TabItem) {
        const newTabList = tabList.map((a: TabItem) => ({
            ...a,
            isActive: a.title === item.title
        }));
        changeTab(newTabList);
    };
    return (
        <TabStyle>
            <div className="tab-container">
                <div className="tab-title-container">
                    {
                        tabList.map((item) => {
                            return <div onClick={() => handleTabClick(item)} key={item.title} className={`tab-title ${item.isActive ? 'active' : ''}`} >
                                {item.title}
                            </div>
                        })
                    }
                </div>
                <div className="tab-content">{tabSelected.content}</div>
            </div>
        </TabStyle>
    );
}