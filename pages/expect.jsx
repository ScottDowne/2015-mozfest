var React = require('react');
var Header = require('../components/header.jsx');
var Footer = require('../components/footer.jsx');
var HeroUnit = require('../components/hero-unit.jsx');

var Expect = React.createClass({
  componentDidMount: function() {
    var schedContainer = this.refs.schedContainer.getDOMNode();
    var schedWidget = document.querySelector(".sched-container");
    schedContainer.appendChild(schedWidget);
  },
  componentWillUnmount: function() {
    var schedWidget = this.refs.schedContainer.getDOMNode().querySelector(".sched-container");
    var widgetContainer = document.querySelector(".widgets");
    widgetContainer.appendChild(schedWidget);
  },
  render: function() {
    return (
      <div className="expect-page">
        <Header/>
        <HeroUnit image="/assets/images/expect.jpg"
                  image2x="/assets/images/expect.jpg">
          what to expect
        </HeroUnit>
        <div className="white-background">
          <div className="content centered wide">
            <h1>A Note from Mark Surman,</h1>
            <h1>Mozilla&#8217;s Executive Director</h1>
            <div className="letter">
              <div className="half-content">
                <p className="boldish">Dear Friends,</p>
                <p>MozFest is an opportunity for those of us passionate about the open Web to unite and make the world a better place. Each year, makers, inventors and educators travel from around the globe to come together and collectively learn and create. And each year, we make a difference.</p>
                <p>As advocates for the open Web, it’s our duty to improve, protect and share it. That’s what MozFest is all about. Come with an idea — no matter how big or small — and share it with the community. And come ready to lead, attend and interact in hundreds of meaningful, fun and creative sessions.</p>
              </div>
              <div className="half-content">
                <p>The open Web needs you now more than ever. Billions of new users are just now discovering the Web through their smartphones, and it’s so important they find the same platform we love so much: one where everyone is an equal citizen, where all people can participate and create, and where opportunity is limitless.</p>
                <p>See you in London.</p>
                <div className="signature">signature placeholder</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content centered wide">
          <h1>Participating at MozFest</h1>
          <div className="participating">
            <div className="half-content">
              <p>MozFest is an annual festival where hundreds of passionate people gather to wield the Web for good. We create, teach and learn as a community in order to make the world a better place. Guiding the festival is Mozilla’s core learning vision: learning should be hands-on, immersive, and done collectively. MozFest can feel chaotic, but everyone is open, friendly and eager to help.</p>
              <p>Participants of all ages and skill levels are welcome. We believe that everyone has something to contribute. Youth especially are encouraged to come</p>
            </div>
            <div className="half-content">
              <p>and lead sessions — we’re dedicated to mentoring and celebrating tomorrow’s leaders. For the very young, on-site daycare and activities are provided.</p>
              <p>MozFest runs for three days and kicks off Friday evening with the Science Fair, where participants demo new, exciting projects that improve the Web. Sessions run throughout Saturday and Sunday, and are accompanied by hacking and good coffee. There’s a party Saturday night, and Sunday evening features a closing demo where we showcase what we created together.</p>
            </div>
          </div>
        </div>
        <div className="white-background">
          <div className="content centered wide">
            <div className="outline">
              <h1>Weekend Outline</h1>
              <div ref="schedContainer"></div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Expect;

