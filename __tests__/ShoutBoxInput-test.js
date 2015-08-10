
/*//this is important for when you import your component
jest.dontMock('../src/client/js/components/ShoutBox.js');

//unit test for Logout component
describe('ShoutBoxInput', function() {
    it('Displaying last message', function() {

        //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        // this stage is important to link to the correct sub component
        var ShoutBoxInput = require('../src/client/js/components/ShoutBox.js').ShoutBoxInput;
        var TestUtils = React.addons.TestUtils;

        var ExpectedLength = 1;
        var ExpectedType = "text";

        //rendered component
        var ShoutBoxInputComp = TestUtils.renderIntoDocument(
            <ShoutBoxInput />
        );

        //getting the rendered component with the class you want to look in
        var ShoutBoxInputRenderedWithClass = TestUtils.findRenderedDOMComponentWithClass (
            ShoutBoxInputComp, 'shout_box_input');

        var HTMLObject= document.createElement('div');

        //setting the innerHTML to the rendered html from react
        HTMLObject.innerHTML = ShoutBoxInputRenderedWithClass.getDOMNode().innerHTML;

        //Assert Equal checking that the text is being rendered
        expect(parseInt(HTMLObject.getElementsByTagName('input').length)).toEqual(ExpectedLength);
        expect(HTMLObject.getElementsByTagName('input')[0]getAttribute("type").toString()).toEqual(ExpectedType);

    });
});*/