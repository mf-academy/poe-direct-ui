import { Card, Space, Row, Col } from 'antd';
import React from "react"

const welcome = () => {
    return (
        <div className="Welcome">
            <Space direction="vertical">
                <Row justify="space-between">
                    <Col span={4}></Col>
                        <Col span={15}>
                            <Card className="WelcomeCard" title="Welcome Exiles!">
                                <p>This is Path of Exile Direct, a website created to connect players around the world, sharing Services and Trading, in a safe and functional environment. Path of Exile is a game built around items. They usually represent your progress in the game. You can craft items yourserlf, but in many cases you need to give them to other players in other to apply specific crafts. That’s the case for Harvest crafts, Syndicate Benches and so on. </p>
                                <p>In PoE Direct you will be able to list your own services and buy the ones you need with a few clicks, just like you would do in PoE Trade, with dedicated search forms! Every service provider is associated with a certain “Trust Level”, which indicates how reliable he is. Every time a player uses a service he can vouch for the service provider, providing more Trust. At certain Trust Level thresholds players will get special Rank titles. Every player also has a dedicated Profile, so you can have as much information as possible about your traders. Lastly, we also got special Achievements that you can unlock, some of them are secret! You will be notified when you get one, inside your profile page. This website is created by the MF Academy Discord Server and its developers, and it’s expensive to mantain! If you want to support us consider donating to our patreon!</p>
                            </Card>
                        </Col>
                    <Col span={4}></Col>
                </Row>
                <Row justify="space-between">
                        <Col span={4}></Col>
                        <Col span={5}>
                            <Card className="WelcomeCard" size="small" title="Trust Levels" extra={<a href="#">More</a>}>
                                <p>A positive vouch provides 1 trust level. If a player decides to use the star ranking system and gives 4 starts the service provider will get 2 trust levels instead. If the the players gives 5 stars the service provider gets a total of 3 trust levels. If the players puts a negative vouch he is shown an additional option to IGNORE the service provider (he will not see the service provider listings anymore, unless he unignores him from the profile blacklist) and to send a SCAM REPORT which should be compiled with a text explaining how the scam happened + ingame images that prove the scam. Scam Reports will be examined by mf academy founders or officers and dealt with according to proofs showcased.</p>
                            </Card>
                        </Col>

                        <Col span={5}>
                            <Card className="WelcomeCard" size="small" title="Moderation" extra={<a href="#">More</a>}>
                                <p>Path of Exile Direct is a moderate by a team of trusted players from MF Academy</p>
                            </Card>
                        </Col>

                        <Col span={5}>
                            <Card className="WelcomeCard" size="small" title="Profiles" extra={<a href="#">More</a>}>
                                <p>Card content</p>
                            </Card>
                        </Col>

                        <Col span={4}></Col>
                </Row>
            </Space>
        </div>
    )
}

export default welcome