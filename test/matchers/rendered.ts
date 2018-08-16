export default function(chai, utils) {
  const Assertion = chai.Assertion;

  /* tslint:disable */
  Assertion.addMethod('rendered', function () {
    this.assert(
        this._obj.length === 1 && this._obj.node,
        'expected component to be rendered',
        'expected component to not be rendered'
    );
  });
  /* tslint:enable */
}
