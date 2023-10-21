package com.guest.mapper;

import com.guest.pojo.po.Room;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author qianye
 * @since 2023-9-17
 */
@Mapper
@Repository
public interface RoomMapper extends BaseMapper<Room> {
    List<Room> getRoomsByType(String rank);
}
