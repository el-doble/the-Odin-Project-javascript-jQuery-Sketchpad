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
        }).click(function () {
            $(this).css('background-color', '#555');
        });
        $(document).mousedown(function () {
            $('.square').bind('mouseover', function () {
                $(this).css({'background-color': '#555', 'opacity': '1'});
            }).mouseup(function () {
                $('.square').unbind('mouseover');
            });
        });
    }


    // function selectMode() {
    //     $('select[name="dropdown"]').val('default');

    //     $('select[name="dropdown"]').change(function () {
    //         $('.square').unbind();
    //         if ($(this).val() === "default") {
    //             $('.square').mouseenter(function () {
    //                 $(this).css({'background-color': '#555', 'opacity': '1'});
    //             });
    //         } else if ($(this).val() === "random") {
    //             $('.square').mouseenter(function () {
    //                 $(this).css({'background-color': '#' +
    //                     // Math.floor(Math.random()*16777215).toString(16));
    //                     Math.floor(1000000 + Math.random() * 9000000).toString(16),
    //                     'opacity': '1'
    //                     });
    //             });
    //         } else if ($(this).val() === "gradient") {
    //             $('.square').mouseenter(function () {
    //                 console.log($(this).css('opacity'));
    //                 $(this).css('opacity', $(this).css('opacity') - 0.1);
    //             });
    //         }
    //     });
    // }

    createGrid(16);

    $('button').click(function () {
        $('.square').css('background-color', '#E0D4D6');
        var numSquares;
        while (true) {
            numSquares = prompt('enter number of squares (16 - 128)', 64);
            if (numSquares > 16 && numSquares < 128) {
                createGrid(numSquares);
                break;
            }
            alert('Please enter a number between 16 and 128');
        }

    });

});