
  const handleFollow = () => {
    const indexUser = followMain[0]?.followId?.find(
      (item) => Number(item) === Number(userMain.id)
    );
    if (!indexUser) {
      
      const followForm = {
        userId: users?.id,
        followId: followMain.length === 0 ? [userMain?.id] : [...followMain[0]?.followId, userMain?.id],
      };
  
      Follows.addFollow(followForm).then(() => {
        dispatch(CallFollows()).unwrap();
      });
    } else {
      const newArray = followMain[0]?.followId?.filter(
        (item) => item !== indexUser
      );

      const followForm = {
        userId: users.id,
        followId: [...newArray],
      };
      Follows.addFollow(followForm).then(() => {
        dispatch(CallFollows()).unwrap();
      });
    }
  };