export const transformServiceData = (req, res, next) => {
  let data = req.body;

  if (data.icon === '') delete data.icon;

  if (typeof data.features === 'string') {
    try {
      data.features = JSON.parse(data.features);
    } catch {
      data.features = [];
    }
  }

  if (data.order !== undefined) {
    data.order = Number(data.order);
  }

  if (data.isPublished !== undefined) {
    data.isPublished = data.isPublished === 'true';
  }

  next();
};

export const transformProjectData = (req, res, next) => {
  let data = req.body;

  // ✅ Remove empty optional fields
  if (data.client === '') delete data.client;
  if (data.category === '') delete data.category;
  if (data.results === '') delete data.results;

  // ✅ Parse metrics (string → array)
  if (typeof data.metrics === 'string') {
    try {
      data.metrics = JSON.parse(data.metrics);
    } catch {
      data.metrics = [];
    }
  }

  // ✅ Parse tags if coming as string
  if (typeof data.tags === 'string') {
    try {
      data.tags = JSON.parse(data.tags);
    } catch {
      data.tags = [];
    }
  }

  // ✅ Convert booleans
  if (data.isFeatured !== undefined) {
    data.isFeatured = data.isFeatured === 'true';
  }

  if (data.isPublished !== undefined) {
    data.isPublished = data.isPublished === 'true';
  }

  next();
};

export const transformBlogData = (req, res, next) => {
  let data = req.body;

  if (data.author === '') delete data.author;
  if (data.category === '') delete data.category;
  if (data.tags === '') delete data.tags;

  if (typeof data.tags === 'string') {
    try {
      data.tags = JSON.parse(data.tags);
    } catch {
      data.tags = [];
    }
  }

  if (data.isPublished !== undefined) {
    data.isPublished = data.isPublished === 'true';
  }

  next();
}


export const feedTransformData = (req, res, next) => {
  let data = req.body;

  if (data.type === '') delete data.type;
  if (data.link === '') delete data.link;

  if (data.isPublished !== undefined) {
    data.isPublished = data.isPublished === 'true';
  }

  next();
};

export const transformTestimonialData = (req, res, next) => {
  let data = req.body;

  if (data.company === '') delete data.company;
  if (data.designation === '') delete data.designation;
  if (data.rating !== undefined) {
    data.rating = Number(data.rating);
  }

  if (data.order !== undefined) {
    data.order = Number(data.order);
  }

  if (data.isPublished !== undefined) {
    data.isPublished = data.isPublished === 'true';
  }

  next();
}

export const transformationJobData =(req,res,next)=>{
  let data = req.body;

  console.log(data)

  if(data.department === '') delete data.department;
  if(data.experience === '') delete data.experience;
  if(data.applyDeadline === '') delete data.applyDeadline;

  if(data.isPublished !== undefined){
    data.isPublished = data.isPublished === 'true';
  }

  next()
}