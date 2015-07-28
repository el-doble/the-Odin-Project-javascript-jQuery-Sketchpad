/*jslint devel:true */
$(document).ready(function () {

    function createGrid(numSquares) {
        var i, j, $gridcontainer = $('#grid-container'),
            squareSize = $gridcontainer.width() / numSquares,
            numRows = Math.ceil($gridcontainer.height() / squareSize);
        for (i = 0; i < numRows; i++) {
            for (j = 0; j < numSquares; j++) {
                $gridcontainer.append('<div class=square></div>');
            }
        }

        $('.square').css({
            width: squareSize,
            height: squareSize
        }).hover(function () {
            $(this).css('background-color', '#555');
        });

    }


    function selectMode() {
        $('select[name="dropdown"]').val('default').change(function () {
            $('.square').unbind();

            switch ($(this).val()) {

            case "default":
                $('.square').mouseenter(function () {
                    $(this).css({'background-color': '#555', 'opacity': '1'});
                });
                break;

            case "random":
                $('.square').mouseenter(function () {
                    $(this).css({'background-color': '#' +
                        // Math.floor(Math.random()*16777215).toString(16)
                        // Math.random().toString(16).substr(-6)
                        // ((1<<24)*(Math.random()+1)|0).toString(16).substr(1)
                        ("000" + (Math.random() * (1 << 24) | 0).toString(16)).substr(-6),
                        'opacity': '1'
                        });
                });
                break;

            case "gradient":
                $('.square').mouseenter(function () {
                    console.log($(this).css('opacity'));
                    $(this).css('opacity', $(this).css('opacity') - 0.1);
                });
                break;
            }
        });
    }


    $('button').click(function () {
        $('.square').css({'background-color': '#DDD', 'opacity': '1'});

        var numSquares;
        while (true) {
            numSquares = prompt('enter number of squares (16 - 128)', 64);
            if (numSquares >= 16 && numSquares <= 128) {
                createGrid(numSquares);
                selectMode();
                break;
            }
            alert('Please enter a number between 16 and 128');
        }

    });

    createGrid(16);
    selectMode();

});