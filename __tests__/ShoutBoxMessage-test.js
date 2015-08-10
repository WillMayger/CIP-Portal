
/*//this is important for when you import your component
jest.dontMock('../src/client/js/components/ShoutBox.js');

var data = [{
                "user_name": "someEmail@canopy-cloud.com",
                "message": "This is a React and Node Component / Microservice!",
           }];

//unit test for Logout component
describe('ShoutBoxMessage', function() {
    it('Displaying last message', function() {

    	//set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        // this stage is important to link to the correct sub component
        var ShoutBoxMessage = require('../src/client/js/components/ShoutBox.js').ShoutBoxMessage;
        var TestUtils = React.addons.TestUtils;

        var Expected = "This is a React and Node Component / Microservice!";

        //rendered component
        var ShoutBoxMessageComp = TestUtils.renderIntoDocument(
            <ShoutBoxMessage data={data} />
        );

        //getting the rendered component with the class you want to look in
        var ShoutBoxMessageRenderedWithClass = TestUtils.findRenderedDOMComponentWithClass (
            ShoutBoxMessageComp, 'shout_box_message');

        //Assert Equal checking that the text is being rendered
        expect(ShoutBoxMessageRenderedWithClass.getDOMNode().textContent).toEqual(Expected);

	});
}); */