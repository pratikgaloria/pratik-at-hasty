import options from 'app/components/Chart/options';

describe('Chart options.', () => {
  it('Should call tooltipFormatter for formatting tooltips.', () => {
    expect(
      options.tooltip.formatter.call({
        x: 234234234,
        point: {
          name: 'Bitcoin',
          x: 234234234.789,
          y: 613423.564,
          z: 1.13,
        },
      }),
    ).toMatch(`
  <div>
    <div style="font-size: 16px"><b>Bitcoin</b></div>
    <div>Market Cap: $234234234.79</div>
    <div>Volume: 613423.56</div>
    <div>Price Change: 1.13%</div>
  </div>`);
  });
});
