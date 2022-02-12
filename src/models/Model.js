import { v4 } from 'uuid';

export class User {
  constructor({
    firstName,
    lastName,
    userName,
    followerCont,
    followingCount,
    totalPosts,
    isProfileCompleted = false,
    currentStep = 2,
  }) {
    this.id = v4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.followerCont = followerCont;
    this.followingCount = followingCount;
    this.totalPosts = totalPosts;
    this.isProfileCompleted = isProfileCompleted;
    this.currentStep = currentStep;
  }
}

export class Post {
  constructor({
    title,
    caption,
    likeCount = 0,
    hastags = [],
    createdDate = new Date(),
    modifiedDate = null,
    ownerId,
    images,
    postLocation,
  }) {
    this.id = v4();
    this.title = title;
    this.caption = caption;
    this.likeCount = likeCount;
    this.hastags = hastags;
    this.ownerId = ownerId;
    this.images = images;
    this.postLocation = postLocation;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
  }
}
