const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);
    if (!document)
      return next(new AppError('No document is found with that ID', 404));

    res.status(204).json({
      status: 'success',
      data: {
        review: null,
      },
    });
  });
