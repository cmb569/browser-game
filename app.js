main{

    let problem one = 4
    function game{

if problem one(4==4){

    console.log('X marks the spot')
}
else problem one (!4==4){
console.log('Out to the plank!')
}

    }


//describe('when answered is true', () => {
//if answered, then it should show right and wrong buttons
it('shows right and wrong buttons', () => {
    const { getByText } = render(<ButtonHolder answeredStartsAs={true}/>);

    const right = getByText(/right/i);
    expect(right).toBeInTheDocument();

    const wrong = getByText(/wrong/i);
    expect(wrong).toBeInTheDocument();
});

//clicking right advances to next card

//clicking wrong advances to next card
});
